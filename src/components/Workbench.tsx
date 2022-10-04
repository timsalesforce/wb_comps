import { Dropdown, IconSettings, Tabs, TabsPanel } from "@salesforce/design-system-react"
import { FunctionComponent, useCallback, useEffect, useState } from "react"
import { Option, SfdcApi } from '../types'
import NProgress from 'nprogress'
import React from "react"
import Container from "@salesforce/design-system-react/components/alert/container"
import { clear } from "console"
import Metadata from "./Metadata"
import RecordEditor from "./RecordEditor"
import RestExplorer from "./RestExplorer"
import Signin from "./Signin"
import SOQL from "./SOQL"
import styled from "styled-components"
import WorkbenchHeader from "./WorkbenchHeader"

interface Props {
    api: any
    sid: string
    apiVersion: string
    sfdcBaseUrl: string
}

const ErrorMessage = styled.div`
  color: red;
`

const Workbench: FunctionComponent<Props> = props => {
    const ReactJson = require('react-json-view-ts').default

    // const {api, setApi, sid, setSid, objects, apiVersion, 
    //     setApiVersion, sfdcBaseUrl, setSfdcBaseUrl, fetchObjects, soapEndpoint,
    //     setSoapEndpoint} = useContext(SessionContext)

    const [objects, setObjects] = useState<string[]>([])
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [objectOptions, setObjectOptions] = useState<Option[]>()
    const [describeResponse, setDescribeResponse] = useState<object>()
    const [objectName, setObjectName] = useState<string>('')
    const [api, setApi] = useState<SfdcApi>(props.api)
    const [sid, setSid] = useState<string>(props.sid)
    const [apiVersion, setApiVersion] = useState<string>(props.apiVersion)
    const [sfdcBaseUrl, setSfdcBaseUrl] = useState<string>(props.sfdcBaseUrl)
    const [soapEndpoint, setSoapEndpoint] = useState<string>(`${props.sfdcBaseUrl}/services/Soap/m/${props.apiVersion}`)
    
    useEffect(() => {
    if (sid) {
        api.setAxiosAuthHeader(sid)
            setObjectOptions(objects.map((o: string) => { return {value: o, label: o} }))
        }
    }, [sid, objects, api])

    const fetchObjects = useCallback(async (apiVersionOverride?: string, sfdcBaseUrlOverride?: string) => {
        if (!objects || objects.length === 0) {
            NProgress.start()
            try {
                const response = await api.describeGlobal({sfdcBaseUrl: sfdcBaseUrlOverride || sfdcBaseUrl, apiVersion: apiVersionOverride || apiVersion})
                response && response.sobjects && setObjects(response.sobjects.map((o: any) => o.name))
            } catch (error) {
                setErrorMessage(api.handleError(error))
            } finally {
                NProgress.done()
            }
        }
    }, [objects, apiVersion, sfdcBaseUrl, api])

    useEffect(() => {
        sfdcBaseUrl && api.setAxiosBaseURL(sfdcBaseUrl)
    }, [sfdcBaseUrl, api])

    const shouldCollapse = useCallback((entry: any) => {
        return entry.name !== objectName
    }, [objectName])

    const showObject = useCallback(async (object: string) => {
        setDescribeResponse(undefined)
        setObjectName(object)
        NProgress.start()
        try {
            const obj = await api.describeObject({object, apiVersion, sfdcBaseUrl})
            const attributeEntries = Object.entries(obj).filter(entry => typeof entry[1] === 'string' || typeof entry[1] === 'boolean')
            const fields = obj.fields.map((f: any) => { return [f.name, f]})
            const childRelationships = obj.childRelationships.map((r: any) => { return [`${r.childSObject}.${r.field}`, r]})
            const recordTypeInfos = obj.recordTypeInfos.map((r: any) => { return [r.name, r]})
            const supportedScopes = obj.supportedScopes.map((s: any) => { return [s.label, s] })
            const actionOverrides = obj.actionOverrides.map((o: any) => { return [o.name, o] })
            const _obj = {
            "Attributes": Object.fromEntries(attributeEntries),
            "Fields": Object.fromEntries(fields),
            "Child Relationships": Object.fromEntries(childRelationships),
            "Record Type Infos": Object.fromEntries(recordTypeInfos),
            "Supported Scopes": Object.fromEntries(supportedScopes),
            "Action Overrides": Object.fromEntries(actionOverrides)
            }
            setDescribeResponse(_obj)
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
            NProgress.done()
        }
    }, [apiVersion])

    return <IconSettings iconPath="/assets/icons"> 
    <Container>
      <WorkbenchHeader sid={sid} sfdcBaseUrl={sfdcBaseUrl} signout={api.signout}/>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      {sid && <Tabs id="tabs-example-default" selectedIndex={selectedIndex} onSelect={(idx: number) => {
        setSelectedIndex(idx)
        clear()
      }}>
        <TabsPanel label="Standard and Custom Objects">
          <Dropdown 
            label="Objects" 
            type="picklist" 
            align="left"
            iconCategory="utility"
            iconName="down"
            length="10"
            iconPosition="right"
            onSelect={(o: any) => showObject(o.value)}
            onOpen={fetchObjects}
            options={objectOptions}/>
        </TabsPanel>
        <TabsPanel label="SOQL Queries">
          <SOQL runQuery={api.runQuery} 
            handleError={api.handleError} 
            setErrorMessage={setErrorMessage} 
            fetchObjects={fetchObjects} 
            objects={objects} 
            sid={sid} 
            apiVersion={apiVersion} 
            sfdcBaseUrl={sfdcBaseUrl} 
            describeObject={api.describeObject}/>
        </TabsPanel>
        <TabsPanel label="Record Editor">
          <RecordEditor updateRecord={api.updateRecord} 
            setErrorMessage={setErrorMessage} 
            setDescribeResponse={setDescribeResponse} 
            apiVersion={apiVersion} 
            sfdcBaseUrl={sfdcBaseUrl} 
            describeObject={api.describeObject} 
            sendRest={api.sendRest}/>
        </TabsPanel>
        <TabsPanel label="Metadata">
          <Metadata setObjectName={setObjectName} 
            setErrorMessage={setErrorMessage} 
            setDescribeResponse={setDescribeResponse} 
            sid={sid} 
            soapEndpoint={soapEndpoint} 
            apiVersion={apiVersion} 
            sendDeploy={api.sendDeploy} 
            sendDeployStatus={api.sendDeployStatus} 
            sendRetrieve={api.sendRetrieve} 
            sendRetrieveStatus={api.sendRetrieveStatus}/>
        </TabsPanel>
        <TabsPanel label="Rest Explorer">
          <RestExplorer setErrorMessage={setErrorMessage} 
            setDescribeResponse={setDescribeResponse} 
            apiVersion={""} 
            sfdcBaseUrl={""} 
            handleError={api.handleError} 
            sendRest={api.sendRest} 
            postRest={api.postRest}/>
        </TabsPanel>
      </Tabs> || <Signin signin={api.signin} 
                    login={api.login}/>}
      {describeResponse && <ReactJson 
        name={objectName} 
        shouldCollapse={shouldCollapse}
        src={describeResponse}/>}
    </Container>
  </IconSettings>
}

export default Workbench