import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React, { FunctionComponent, useCallback, useState } from "react"
import NProgress from 'nprogress'
import { DescribeObjectPayload, SObjectDescribeResult } from "../types"

interface Props {
    objects: string[]
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>
    apiVersion: string
    sfdcBaseUrl: string
    setErrorMessage: (message: string) => void
}

const StandardAndCustomObjects: FunctionComponent<Props> = (props) => {
    const {objects, describeObject, apiVersion, sfdcBaseUrl, setErrorMessage} = props

    const [apiResponse, setApiResponse] = useState<object>()

    const showObject = useCallback(async (object: string) => {
        setApiResponse(undefined)
        NProgress.start()
        try {
            const obj = await describeObject({object, apiVersion, sfdcBaseUrl})
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
            setApiResponse(_obj)
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
            NProgress.done()
        }
    }, [])

    return <FormControl sx={{ m: 0, minWidth: 100 }}>
        <InputLabel>Objects</InputLabel>
        <Select 
            label="Objects"
            onSelect={(o: any) => showObject(o.value)}>
                {objects.map(o => <MenuItem value={o}>{o}</MenuItem>)}
        </Select>
        <div>{JSON.stringify(apiResponse)}</div>
    </FormControl>
}

export default StandardAndCustomObjects