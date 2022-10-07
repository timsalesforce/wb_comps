import { FormEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import { DescribeObjectPayload, FieldOption, Option, QueryRecord, SObjectDescribeResult, SOQLQueryPayload } from '../types'
import NProgress from 'nprogress'
import React from "react"
import { MenuItem, Select } from "@mui/material"

interface Props {
    setErrorMessage: (message: string) => void
    fetchObjects: () => void
    objects: string[]
    sid: string
    apiVersion: string
    sfdcBaseUrl: string
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>
    handleError: (message: string) => string
    runQuery: (payload: SOQLQueryPayload) => Promise<any>
}

const SOQL: FunctionComponent<Props> = props => {

    const {setErrorMessage, fetchObjects, objects, sid, apiVersion, sfdcBaseUrl,
        describeObject, handleError} = props

    const [selectedObject, setSelectedObject] = useState<string>()
    const [objectOptions, setObjectOptions] = useState<any[]>()
    const [_fields, setFields] = useState<Option[]>()
    const [selected, setSelected] = useState<FieldOption[]>([])
    const [_query, setQuery] = useState<string>()
    const [jsonResponse, _setJsonResponse] = useState<QueryRecord[]>()
    
    useEffect(() => {
        if (sid) {
          setObjectOptions(objects.map((o: string, idx: number) => { return {subTitle: o, label: o, id: idx, type: 'field'} }))
        }
      }, [sid, objects])

    useEffect(() => {
        if (selected && selectedObject) {
            const selectedFieldsString = selected.map(s => s.label).join(', ')
            setQuery(`select ${selectedFieldsString} from ${selectedObject}`)
        } else {
            setQuery('')
        }
    }, [selected, selectedObject])

    const populateFields = useCallback(async (object: string) => {
        setSelectedObject(object)
        setSelected([{subTitle: 'Id', label: 'Id', id: 0, type: 'field'}])
        try {
            NProgress.start()
            const describeResult: SObjectDescribeResult = await describeObject({object, apiVersion, sfdcBaseUrl})
            setFields(describeResult.fields.map(f => { return {value: f.name, label: f.name} }))
        } catch (error: any) {
            setErrorMessage(handleError(error))
        } finally {
            NProgress.done()
        }
    }, [apiVersion, sfdcBaseUrl])

    // const executeQuery = useCallback(async () => {
    //     try {
    //         NProgress.start()
    //         const response = await runQuery({query: query!, apiVersion, sfdcBaseUrl})
    //         const records: QueryRecord[] = response.records.map((r: any) => { 
    //             return { fields: Object.entries(r).filter(es => typeof es[1] === 'string' || typeof es[1] === 'boolean').map(e => {
    //                 return { name: e[0], value: e[1] + "" }
    //             })}
    //         })
    //         setJsonResponse(records)
    //     } catch (error) {
    //         setErrorMessage(error instanceof Error ? error.message : error + '')
    //     } finally {
    //         NProgress.done()
    //     }
    // }, [query, apiVersion, sfdcBaseUrl])

    return <div>
        <Select 
            label={selectedObject || 'Select an Object'} 
            onOpen={fetchObjects}
            onSelect={(e: FormEvent) => populateFields(e.currentTarget.innerHTML)}>
                {objectOptions?.map(o => <MenuItem value={o.value}>{o.label}</MenuItem>)}
        </Select>
        {/* <Combobox
            id="combobox-unique-id"
            menuItemVisibleLength={5}
            events={{
                onChange: (event: any ) => {
                    setQuery(event?.target.value)
                },
                onSelect: (_event: any, data: any) => {
                    setSelected(data.selection)
                },
                onRequestRemoveSelectedOption: (_event: any, data: any) => {
                    setSelected(data.selection)
                }
            }}
            labels={{
                label: 'Query',
                placeholder: 'SOQL Query - Choose Fields',
            }}
            multiple
            options={fields}
            value={query}
            selection={selected}
        /> */}
        {/* <Button
            onClick={executeQuery}
            label="Query"
        />
         <Button
            onClick={() => {
                setJsonResponse(undefined)
                setSelectedObject(undefined)
                setSelected([])
                setFields(undefined)
            }}
            label="Clear"
        /> */}
        <table>
            {jsonResponse && jsonResponse.length > 0 && jsonResponse[0].fields.map(f => <th>{f.name}</th>)}
            {jsonResponse?.map((r, idx) => <tr key={idx}>
                {r.fields.map(f => <td>{f.value}</td>)}
            </tr>)} 
        </table>
    </div>
}

export default SOQL