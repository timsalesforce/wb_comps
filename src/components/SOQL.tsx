import { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import { DescribeObjectPayload, QueryRecord, SObjectDescribeResult, SOQLQueryPayload } from '../types'
import NProgress from 'nprogress'
import React from "react"
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material"

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, fields: string[]) {
    return {
      fontWeight:
        fields.indexOf(name) === -1
          ? ""
          : "bold",
    };
  }

const SOQL: FunctionComponent<Props> = props => {

    const {setErrorMessage, fetchObjects, objects, sid, apiVersion, sfdcBaseUrl,
        describeObject, handleError, runQuery} = props

    const [selectedObject, setSelectedObject] = useState<string>()
    const [fields, setFields] = useState<string[]>(['Id', 'Name'])
    const [selected, setSelected] = useState<string[]>([])
    const [query, setQuery] = useState<string>()
    const [jsonResponse, setJsonResponse] = useState<QueryRecord[]>()

    useEffect(() => {
        if (selected && selectedObject) {
            const selectedFieldsString = selected.join(', ')
            setQuery(`select ${selectedFieldsString} from ${selectedObject}`)
        } else {
            setQuery('')
        }
    }, [selected, selectedObject])

    const populateFields = useCallback(async (object: string) => {
        setSelected([])
        setSelectedObject(object)
        try {
            NProgress.start()
            const describeResult: SObjectDescribeResult = await describeObject({object, apiVersion, sfdcBaseUrl})
            setFields(describeResult.fields.map(f => f.name))
        } catch (error: any) {
            setErrorMessage(handleError(error))
        } finally {
            NProgress.done()
        }
    }, [apiVersion, sfdcBaseUrl])

    const handleChange = useCallback(async (event: SelectChangeEvent) => {
        const value = event.target.value
        setSelected(typeof value === 'string' ? value.split(',') : value)
    }, [])
    
    const executeQuery = useCallback(async () => {
        try {
            NProgress.start()
            const response = await runQuery({query: query!, apiVersion, sfdcBaseUrl})
            const records: QueryRecord[] = response.records.map((r: any) => { 
                return { fields: Object.entries(r).filter(es => typeof es[1] === 'string' || typeof es[1] === 'boolean').map(e => {
                    return { name: e[0], value: e[1] + "" }
                })}
            })
            setJsonResponse(records)
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : error + '')
        } finally {
            NProgress.done()
        }
    }, [query, apiVersion, sfdcBaseUrl])

    return <div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Select an Object</InputLabel>
            <Select 
                label="Select an Object"
                onOpen={fetchObjects}
                onChange={(e: SelectChangeEvent) => populateFields(e.target.value)}>
                    {objects.map(o => <MenuItem value={o}>{o}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel>Select Fields</InputLabel>
            <Select
                id="query-id"
                multiple
                value={selected}
                onChange={handleChange}
                input={<OutlinedInput label="Select Fields"/>}
                MenuProps={MenuProps}>
                    {fields?.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selected)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <TextField fullWidth
            label="Query"
            multiline
            maxRows={3}
            defaultValue={query}
            InputLabelProps={{ shrink: true }}  
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {setQuery(e.target.value)}}>
        </TextField>
        <Button
            onClick={executeQuery}>Query</Button>
         <Button
            onClick={() => {
                setJsonResponse(undefined)
                setSelected([])
            }}>Clear</Button>
        <table>
            {jsonResponse && jsonResponse.length > 0 && jsonResponse[0].fields.map(f => <th>{f.name}</th>)}
            {jsonResponse?.map((r, idx) => <tr key={idx}>
                {r.fields.map(f => <td>{f.value}</td>)}
            </tr>)} 
        </table>
    </div>
}

export default SOQL