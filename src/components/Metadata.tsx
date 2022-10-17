import Box from "@mui/material/Box/Box"
import Tab from "@mui/material/Tab/Tab"
import Tabs from "@mui/material/Tabs/Tabs"
import Typography from "@mui/material/Typography/Typography"
import React, { SyntheticEvent, useCallback } from "react"
import {  FunctionComponent, useState } from "react"
import styled from "styled-components"
import { DeployPayload, DeployStatusPayload, RetrievePayload, RetrieveStatusPayload } from "../types"
import Deploy from "./Deploy"
import Retrieve from "./Retrieve"

interface Props {
    handleError: (error: any) => void
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

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
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
  
const Metadata: FunctionComponent<Props> = props => {
    const {handleError, sid, soapEndpoint,
        sendDeploy, sendDeployStatus, sendRetrieve, sendRetrieveStatus, apiVersion} = props

    const [status, setStatus] = useState<string>()
    const [tabValue, setTabValue] = useState<number>(0)

    const handleChange = useCallback(async (e: SyntheticEvent, newValue: number) => {
      setTabValue(newValue)
    }, [])
    
    return <div>
        {status && <StatusMessage>{status}</StatusMessage>}
        <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Retrieve"/>
            <Tab label="Deploy"/>
        </Tabs>
        <TabPanel index={0} value={tabValue}>
            <Retrieve sid={sid} soapEndpoint={soapEndpoint} sendRetrieve={sendRetrieve} sendRetrieveStatus={sendRetrieveStatus} apiVersion={apiVersion} handleError={handleError} setObjectName={props.setObjectName} setStatus={setStatus}/>
        </TabPanel>
        <TabPanel index={1} value={tabValue}>
            <Deploy sid={sid} soapEndpoint={soapEndpoint} sendDeploy={sendDeploy} sendDeployStatus={sendDeployStatus} handleError={handleError} setStatus={setStatus} setObjectName={props.setObjectName}/>
        </TabPanel>
    </div>
}

export default Metadata