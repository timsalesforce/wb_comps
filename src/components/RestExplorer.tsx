import { Button, IconSettings, Input, Radio, RadioGroup, Textarea } from "@salesforce/design-system-react"
import { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import styled from "styled-components"
import React from "react"
import { AdhocRestPayload, AdhocRestPostPayload } from "../types"

interface Props {
    setErrorMessage: (msg: string) => void
    setDescribeResponse: (res: object) => void
    apiVersion: string
    sfdcBaseUrl: string
    handleError: (message: string) => string
    sendRest: (payload: AdhocRestPayload) => Promise<any>
    postRest: (payload: AdhocRestPostPayload) => Promise<any>
}

const PaddedDiv = styled.div`
  padding: 1em 0;
`

const RestExplorer: FunctionComponent<Props> = (props) => {

    // const {api, apiVersion, sfdcBaseUrl} = useContext(SessionContext)
    const {setErrorMessage, setDescribeResponse} = props
    const [restEndpoint, setRestEndpoint] = useState<string>(`/services/data/v${props.apiVersion}`)
    const [httpMethod, setHttpMethod] = useState<string>('get')
    const [body, setBody] = useState<string>('')
    
    useEffect(() => {
        setRestEndpoint(`/services/data/v${props.apiVersion}`)
    }, [props.apiVersion])

    const send = useCallback(async () => {
        NProgress.start()
        try {
            let describeResponse
            switch(httpMethod) {
                case 'get':
                case 'head':
                case 'delete':
                    describeResponse = await props.sendRest({endpoint: restEndpoint, apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, verb: httpMethod})
                    break
                case 'post':
                case 'patch':
                case 'put':
                    describeResponse = await props.postRest({body, endpoint: restEndpoint, apiVersion: props.apiVersion, sfdcBaseUrl: props.sfdcBaseUrl, verb: httpMethod})
                    break
            }
          setDescribeResponse(describeResponse)
        } catch (error: any) {
          setErrorMessage(props.handleError(error))
        } finally {
          NProgress.done()
        }
      }, [restEndpoint, httpMethod, body])

      
    return <IconSettings iconPath="/assets/icons">
        <PaddedDiv>
            <div className="slds-text-title_bold slds-form-element__label">HTTP Method</div>
            <RadioGroup
                onChange={(event: any) => setHttpMethod(event.target.value)}
                name="Type"
                variant="button-group"
                style={{border: 0}}
            >
                <Radio
                    id="get"
                    value="get"
                    defaultChecked="true"
                    labels={{label: 'GET'}}>

                </Radio>
                <Radio
                    id="post"
                    value="post"
                    labels={{label: 'POST'}}>

                </Radio>
                <Radio
                    id="put"
                    value="put"
                    labels={{label: 'PUT'}}>

                </Radio>
                <Radio
                    id="patch"
                    value="patch"
                    labels={{label: 'PATCH'}}>

                </Radio>
                <Radio
                    id="delete"
                    value="delete"
                    labels={{label: 'DELETE'}}>

                </Radio>
                <Radio
                    id="head"
                    value="head"
                    labels={{label: 'HEAD'}}>

                </Radio>
            </RadioGroup>
        </PaddedDiv>
        <PaddedDiv>
            <div className="slds-text-title_bold slds-form-element__label">Endpoint</div>
            <Input type="text" name="rest" placeholder="Rest Endpoint" value={restEndpoint} onChange={(e: ChangeEvent<HTMLInputElement>) => setRestEndpoint(e.target.value)}/>
        </PaddedDiv>
        {['post', 'put', 'patch'].filter(v => v === httpMethod).length > 0 && <PaddedDiv>
            <div className="slds-text-title_bold slds-form-element__label">Payload</div>
            <Textarea onChange={(e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}></Textarea>
        </PaddedDiv>}
        <Button onClick={send}>Send</Button>
    </IconSettings>
}

export default RestExplorer