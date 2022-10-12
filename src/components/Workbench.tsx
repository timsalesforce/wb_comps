import { FunctionComponent, SyntheticEvent, useCallback, useEffect, useMemo, useState } from "react"
import { ApiType, Option, SfdcApi } from '../types'
import NProgress from 'nprogress'
import React from "react"
import Metadata from "./Metadata"
import RecordEditor from "./RecordEditor"
import RestExplorer from "./RestExplorer"
import Signin from "./Signin"
import SOQL from "./SOQL"
import styled from "styled-components"
import WorkbenchHeader from "./WorkbenchHeader"
import { Box, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material"
import * as apiStub from '../api/apiStub'
import * as directApi from '../api/directApi'
import * as middleApi from '../api/middleApi'

export interface Props {
    customApi?: SfdcApi
    apiType: ApiType
    sid: string
    apiVersion: string
    sfdcBaseUrl: string
    middleUrl?: string
}

const WorkbenchContainer = styled.div`
  width: 90%;
  margin: auto;
`

const ErrorMessage = styled.div`
  color: red;
`
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{maxWidth: '1080px', margin: 'auto'}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Workbench: FunctionComponent<Props> = props => {
    const {customApi, sid, apiVersion, sfdcBaseUrl, middleUrl, apiType} = props

    const [objects, setObjects] = useState<string[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [objectOptions, setObjectOptions] = useState<Option[]>()
    const [describeResponse, setDescribeResponse] = useState<object>()
    const [_objectName, setObjectName] = useState<string>('')
    const [api, setApi] = useState<SfdcApi>(apiStub)

    const [tabValue, setTabValue] = useState<number>(0)
    
    const soapEndpoint = useMemo(() => {
      return `${props.sfdcBaseUrl}/services/Soap/m/${props.apiVersion}`
    }, [props.sfdcBaseUrl])

    useEffect(() => {
      switch (apiType) {
        case 'direct': 
          setApi(directApi)
          break
        case 'middle':
          setApi(middleApi)
          break
        case 'stub':
            setApi(apiStub)
            break
        case 'custom':
          if (customApi) {
            setApi(customApi) 
          } else throw new Error('Must include an api if customApi is used')
      }
    }, [apiType, api])

    useEffect(() => {
      if (sid) {
        api.setAxiosAuthHeader(sid)
        setObjectOptions(objects.map((o: string) => { return {value: o, label: o} }))
      }
    }, [sid, objects, api])

    useEffect(() => {
      props.middleUrl && api.setAxiosBaseURL(props.middleUrl)
    }, [props.middleUrl])

    const fetchObjects = useCallback(async (_event?: SyntheticEvent, apiVersionOverride?: string, sfdcBaseUrlOverride?: string) => {
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
        api.setAxiosBaseURL(middleUrl || sfdcBaseUrl)
    }, [sfdcBaseUrl, middleUrl, api])

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

    const handleChange = useCallback(async (e: SyntheticEvent, newValue: number) => {
      setTabValue(newValue)
    }, [])

    return <div style={{width: "100%"}}>
      <WorkbenchHeader sid={sid} sfdcBaseUrl={sfdcBaseUrl} signout={api.signout}/>
      <WorkbenchContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {sid && <div>
        <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab label="Standard and Custom Objects" style={{ padding: '0 3em' }}/>
            <Tab label="SOQL Queries" style={{ padding: '0 3em' }}/>
            <Tab label="Record Editor" style={{ padding: '0 3em' }}/>
            <Tab label="Metadata" style={{ padding: '0 3em' }}/>
            <Tab label="Rest Explorer" style={{ padding: '0 3em' }}/>
          </Tabs>
          <TabPanel index={0} value={tabValue}>
            <FormControl sx={{ m: 0, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">Objects</InputLabel>
              <Select 
                label="Objects"
                onSelect={(o: any) => showObject(o.value)}
                onOpen={fetchObjects}>
                  {objectOptions?.map(o => <MenuItem value={o.value}>{o.label}</MenuItem>)}
              </Select>
            </FormControl>
          </TabPanel>
          <TabPanel index={1} value={tabValue}>
            <SOQL runQuery={api.runQuery} 
              handleError={api.handleError} 
              setErrorMessage={setErrorMessage} 
              fetchObjects={fetchObjects} 
              objects={objects} 
              sid={sid} 
              apiVersion={apiVersion} 
              sfdcBaseUrl={sfdcBaseUrl} 
              describeObject={api.describeObject}/>
          </TabPanel>
          <TabPanel index={2} value={tabValue}>
            <RecordEditor updateRecord={api.updateRecord} 
              setErrorMessage={setErrorMessage} 
              setDescribeResponse={setDescribeResponse} 
              apiVersion={apiVersion} 
              sfdcBaseUrl={sfdcBaseUrl} 
              describeObject={api.describeObject} 
              sendRest={api.sendRest}/>
          </TabPanel>
          <TabPanel index={3} value={tabValue}>
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
          </TabPanel>
          <TabPanel index={4} value={tabValue}>
            <RestExplorer setErrorMessage={setErrorMessage} 
              setDescribeResponse={setDescribeResponse} 
              apiVersion={""} 
              sfdcBaseUrl={""} 
              handleError={api.handleError} 
              sendRest={api.sendRest} 
              postRest={api.postRest}/>
          </TabPanel></div> || <Signin signin={api.signin} 
                      login={api.login}/>}
        <div>{JSON.stringify(describeResponse)}</div>
      </WorkbenchContainer>
    </div>

}

export default Workbench