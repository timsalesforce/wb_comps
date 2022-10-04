import { Tabs, TabsPanel } from "@salesforce/design-system-react"
import React from "react"
import {  FunctionComponent, useState } from "react"
import styled from "styled-components"
import { DeployPayload, DeployStatusPayload, RetrievePayload, RetrieveStatusPayload } from "../types"
import Deploy from "./Deploy"
import Retrieve from "./Retrieve"

interface Props {
    setErrorMessage: (message: string) => void
    setDescribeResponse: (response: any) => void
    setObjectName: (name: string) => void
    sid: string
    soapEndpoint: string
    apiVersion: string
    sendDeploy: (payload: DeployPayload) => Promise<any>
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>
    sendRetrieve: (payload: RetrievePayload) => Promise<any>
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>
}

const StatusMessage = styled.div`
  color: green;
`

const Metadata: FunctionComponent<Props> = props => {
    const {setErrorMessage, setDescribeResponse, sid, soapEndpoint,
        sendDeploy, sendDeployStatus, sendRetrieve, sendRetrieveStatus, apiVersion} = props

    const [status, setStatus] = useState<string>()

    return <div>
        {status && <StatusMessage>{status}</StatusMessage>}
        <Tabs>
            <TabsPanel label="Retrieve">
                <Retrieve sid={sid} soapEndpoint={soapEndpoint} sendRetrieve={sendRetrieve} sendRetrieveStatus={sendRetrieveStatus} apiVersion={apiVersion} setErrorMessage={setErrorMessage} setDescribeResponse={setDescribeResponse} setObjectName={props.setObjectName} setStatus={setStatus}/>
            </TabsPanel>
            <TabsPanel label="Deploy">
                <Deploy sid={sid} soapEndpoint={soapEndpoint} sendDeploy={sendDeploy} sendDeployStatus={sendDeployStatus} setErrorMessage={setErrorMessage} setDescribeResponse={setDescribeResponse} setStatus={setStatus} setObjectName={props.setObjectName}/>
            </TabsPanel>
        </Tabs>
    </div>
}

export default Metadata