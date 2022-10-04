import { Button, IconSettings, Input } from "@salesforce/design-system-react"
import { ChangeEvent, FunctionComponent, useCallback, useContext, useState } from "react"
import { SessionContext } from "../context"
import NProgress from 'nprogress'
import { AdhocRestPayload, DescribeObjectPayload, SObjectDescribeResult, UpdateRecordPayload } from "../types"
import InputElement from "./InputElement"
import React from "react"


interface Props {
    setDescribeResponse: (obj?: object) => void
    setErrorMessage: (msg: string) => void
    apiVersion: string
    sfdcBaseUrl: string
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>
    sendRest: (payload: AdhocRestPayload) => Promise<any>
    updateRecord: (payload: UpdateRecordPayload) => Promise<any>
}

const RecordEditor: FunctionComponent<Props> = (props) => {
    const {setDescribeResponse, setErrorMessage} = props

    // const {api, apiVersion, sfdcBaseUrl} = useContext(SessionContext)

    const [recordId, setRecordId] = useState<string>('')
    const [record, setRecord] = useState<any>({})
    const [entityType, setEntityType] = useState<string>('')
    const [entityFields, setEntityFields] = useState<any>()
    const [newRecord, setNewRecord] = useState<any>({})

    const fetch = useCallback(async () => {
        setErrorMessage('')
        setDescribeResponse(undefined)
        setRecord({})
        setNewRecord({})
        NProgress.start()
        try {
            const describeResult: SObjectDescribeResult = await props.describeObject({object: entityType, apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl})
            const fields = describeResult.fields.map((f: any) => {
                return [
                    f.name, 
                    {
                        type: f.type, 
                        readonly: !f.updateable, 
                        values: f.picklistValues.map((v: any) => { return {label: v.label} })
                    }
                ]
            })
            setEntityFields(Object.fromEntries(fields))
            const theRecord = await props.sendRest({apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, endpoint: `/services/data/v55.0/sobjects/${entityType}/${recordId}`})
            setRecord(theRecord)
        } catch (error) {
          setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
          NProgress.done()
        }
      }, [recordId, props.sfdcBaseUrl, props.apiVersion, entityType])

    const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>, label?: string, value?: string) => {
        const key: string = label || e.target.labels && e.target.labels[0].innerText || ''
        if (key) {
            const _record = {...record}
            const _newRecord = {...newRecord}
            _record[key] = value || e.target.value
            _newRecord[key] = value || e.target.value
            setRecord(_record)
            setNewRecord(_newRecord)
        }
    }, [record, newRecord])

    const _updateRecord = useCallback(async () => {
        NProgress.start()
        try {
            await props.updateRecord({apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, objectId: recordId, objectName: entityType, body: JSON.stringify(newRecord), verb: 'patch'})
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
            await fetch()
            setNewRecord({})
            NProgress.done()
        }
        
    }, [props.apiVersion, props.sfdcBaseUrl, entityType, newRecord])

    const getType = useCallback((f: any) => {
        return entityFields[f[0]].type
    }, [entityFields])

    const getValue = useCallback((f: any) => {
        return f[1]
    }, [entityFields])

    const getLabel = useCallback((f: any) => {
        return f[0]
    }, [entityFields])

    const isReadOnly = useCallback((f: any) => {
        return entityFields[f[0]].readonly
    }, [entityFields])

    const getOptions = useCallback((f: any) => {
        return entityFields[f[0]].values
    }, [entityFields])

    return <IconSettings iconPath="/assets/icons">
        <Input type="text" name="entity-type" placeholder="Entity Type" onChange={(e: ChangeEvent<HTMLInputElement>) => setEntityType(e.target.value)}/>
        <Input type="text" name="record-id" placeholder="Record ID" onChange={(e: ChangeEvent<HTMLInputElement>) => setRecordId(e.target.value)}/>
        <Button onClick={fetch}>Fetch Record</Button>
        {Object.keys(newRecord).length > 0 && <Button onClick={_updateRecord}>Save</Button>}
        {Object.entries(record).filter(f => 
            f[0] !== 'attributes' && !['reference', 'address'].includes(getType(f))).map(f => 
                    <InputElement 
                        key={getLabel(f)} 
                        type={getType(f)} 
                        value={getValue(f)} 
                        label={getLabel(f)} 
                        disabled={isReadOnly(f)} 
                        onChange={handleChange} 
                        options={getOptions(f)}/>)
        }
        {Object.keys(newRecord).length > 0 && <Button onClick={_updateRecord}>Save</Button>}
    </IconSettings>
}

export default RecordEditor