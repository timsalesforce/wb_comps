import { ChangeEvent, FunctionComponent, useCallback, useState } from "react"
import NProgress from 'nprogress'
import { DescribeObjectPayload, FetchRecordPayload, SObjectDescribeResult, UpdateRecordPayload } from "../types"
import InputElement from "./InputElement"
import React from "react"
import Button from "@mui/material/Button/Button"
import { TextField } from "@mui/material"


interface Props {
    setErrorMessage: (msg: string) => void
    apiVersion: string
    sfdcBaseUrl: string
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>
    fetchRecord: (payload: FetchRecordPayload) => Promise<any>
    updateRecord: (payload: UpdateRecordPayload) => Promise<any>
}

const RecordEditor: FunctionComponent<Props> = (props) => {
    const {setErrorMessage} = props

    const [recordId, setRecordId] = useState<string>('')
    const [record, setRecord] = useState<any>({})
    const [entityType, setEntityType] = useState<string>('')
    const [entityFields, setEntityFields] = useState<any>()
    const [newRecord, setNewRecord] = useState<any>({})

    const fetch = useCallback(async () => {
        setErrorMessage('')
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
                        values: f.picklistValues.map((v: any) => v.label )
                    }
                ]
            })
            setEntityFields(Object.fromEntries(fields))
            const theRecord = await props.fetchRecord({apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, objectId: recordId, objectName: entityType})
            setRecord(theRecord)
        } catch (error) {
          setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
          NProgress.done()
        }
      }, [recordId, props.sfdcBaseUrl, props.apiVersion, entityType])

    const handleChange = useCallback(async (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
        const _record = {...record}
        const _newRecord = {...newRecord}
        _record[fieldName] = e.target.value
        _newRecord[fieldName] = e.target.value
        setRecord(_record)
        setNewRecord(_newRecord)
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

    return <div>
        <TextField fullWidth name="entity-type" placeholder="Entity Type" onChange={(e: ChangeEvent<HTMLInputElement>) => setEntityType(e.target.value)}/>
        <TextField fullWidth name="record-id" placeholder="Record ID" onChange={(e: ChangeEvent<HTMLInputElement>) => setRecordId(e.target.value)}/>
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
    </div>
}

export default RecordEditor