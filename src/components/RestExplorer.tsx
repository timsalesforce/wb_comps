import { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import styled from "styled-components"
import React from "react"
import { AdhocRestPayload, AdhocRestPostPayload } from "../types"
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { JsonViewer } from '@textea/json-viewer'

interface Props {
    handleError: (error: any) => void
    apiVersion: string
    sfdcBaseUrl: string
    sendRest: (payload: AdhocRestPayload) => Promise<any>
    postRest: (payload: AdhocRestPostPayload) => Promise<any>
}

const PaddedDiv = styled.div`
  padding: 1em 0;
`

const RadioGrid = styled.div`
    display: flex;
    grid-template-columns: auto auto auto auto auto auto;
`

const RestExplorer: FunctionComponent<Props> = (props) => {
    const {handleError} = props
    const [restEndpoint, setRestEndpoint] = useState<string>(`/services/data/v${props.apiVersion}`)
    const [httpMethod, setHttpMethod] = useState<string>('get')
    const [body, setBody] = useState<string>('')

    const [apiResponse, setApiResponse] = useState<object>()
    
    useEffect(() => {
        setRestEndpoint(`/services/data/v${props.apiVersion}`)
    }, [props.apiVersion])

    const send = useCallback(async () => {
        handleError('')
        NProgress.start()
        try {
            let apiResponse
            switch(httpMethod) {
                case 'get':
                case 'head':
                case 'delete':
                    apiResponse = await props.sendRest({endpoint: restEndpoint, apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, verb: httpMethod})
                    break
                case 'post':
                case 'patch':
                case 'put':
                    apiResponse = await props.postRest({body, endpoint: restEndpoint, apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, verb: httpMethod})
                    break
            }
          setApiResponse(apiResponse)
        } catch (error: any) {
          handleError(error)
        } finally {
          NProgress.done()
        }
      }, [restEndpoint, httpMethod, body])

      
    return <div>
        <PaddedDiv>
            <div>HTTP Method</div>
            <RadioGroup
                defaultValue="get"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setHttpMethod(event.target.value)}
                name="Type"
                style={{border: 0}}>
                <RadioGrid>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="get"
                        value="get"
                        label='GET'/>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="post"
                        value="post"
                        label='POST'/>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="put"
                        value="put"
                        label='PUT'/>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="patch"
                        value="patch"
                        label='PATCH'/>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="delete"
                        value="delete"
                        label='DELETE'/>
                    <FormControlLabel
                        control={<Radio></Radio>}
                        id="head"
                        value="head"
                        label='HEAD'/>
                </RadioGrid>
            </RadioGroup>
        </PaddedDiv>
        <PaddedDiv>
            <div className="slds-text-title_bold slds-form-element__label">Endpoint</div>
            <TextField fullWidth type="text" name="rest" placeholder="Rest Endpoint" value={restEndpoint} onChange={(e: ChangeEvent<HTMLInputElement>) => setRestEndpoint(e.target.value)}/>
        </PaddedDiv>
        {['post', 'put', 'patch'].filter(v => v === httpMethod).length > 0 && <PaddedDiv>
            <div className="slds-text-title_bold slds-form-element__label">Payload</div>
            <TextField fullWidth onChange={(e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}></TextField>
        </PaddedDiv>}
        <Button onClick={send}>Send</Button>
        <JsonViewer defaultInspectDepth={1} value={apiResponse}/>
    </div>
}

export default RestExplorer