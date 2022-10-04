import { Button, Checkbox, Input, Radio, RadioGroup } from "@salesforce/design-system-react"
import { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import styled from "styled-components"
import { DeployPayload, DeployStatusPayload } from "../types/index"
import React from "react"

interface Props {
    setErrorMessage: (message: string) => void
    setDescribeResponse: (response: any) => void
    setStatus: (staus?: string) => void
    setObjectName: (name: string) => void
    sendDeploy: (payload: DeployPayload) => Promise<any>
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>
    sid: string
    soapEndpoint: string
}

const PaddedDiv = styled.div`
  padding: 1em 0;
`

const Deploy: FunctionComponent<Props> = props => {
    
    const {setErrorMessage, setDescribeResponse, setStatus} = props

    const [deployId, setDeployId] = useState<string>()
    const [zipFile, setZipFile] = useState<File>()
    const [allowMissingFiles, setAllowMissingFiles] = useState<boolean>(false)
    const [autoUpdatePackage, setAutoUpdatePackage] = useState<boolean>(false)
    const [checkOnly, setCheckOnly] = useState<boolean>(false)
    const [ignoreWarnings, setIgnoreWarnings] = useState<boolean>(false)
    const [performRetrieve, setPerformRetrieve] = useState<boolean>(false)
    const [purgeOnDelete, setPurgeOnDelete] = useState<boolean>(false)
    const [rollbackOnError, setRollbackOnError] = useState<boolean>(false)
    const [singlePackage, setSinglePackage] = useState<boolean>(false)
    const [runTests, setRunTests] = useState<string[]>()
    const [testLevel, setTestLevel] = useState<string>('NoTestRun')

    const [inputRef, setInputRef] = useState<any>()

    useEffect(() => {
        if (deployId) {
          setStatus('Request pending, checking status again in 5s...')
          const intervalId = setInterval(() => {
            NProgress.start()
            props.sendDeployStatus({id: deployId, includeDetails: true, sessionId: props.sid, soapEndpoint: props.soapEndpoint}).then((response: any) => {
              if (response.result.done) {
                setStatus(undefined)
                clearInterval(intervalId)
                setDescribeResponse(response.result)
              }
            }).catch((error: any) => {
              setErrorMessage(error.message)
              clearInterval(intervalId)
            }).finally(() => {
              NProgress.done()
            })
          }, 5000)
        }
      }, [deployId])

    const changeHandler = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        setZipFile(event.target.files && event.target.files[0] || undefined)
    }, [])

    const deploy = useCallback(async () => {
        setDescribeResponse(undefined)
        setErrorMessage('')

        const deployPayload: DeployPayload = {
            zipFile,
            allowMissingFiles,
            autoUpdatePackage,
            ignoreWarnings,
            checkOnly,
            performRetrieve,
            purgeOnDelete,
            rollbackOnError,
            singlePackage,
            runTests,
            testLevel,
            soapEndpoint: props.soapEndpoint,
            sessionId: props.sid
        }
        try {
          NProgress.start()
          const response = await props.sendDeploy(deployPayload)
          setDeployId(response.result.id)
          setDescribeResponse(response.result)
        } catch (error) {
          setErrorMessage((error instanceof Error) ? error.message : error + '')
        } finally {
          NProgress.done()
          props.setObjectName('Deploy')
        }
    }, [zipFile, allowMissingFiles, autoUpdatePackage, ignoreWarnings, checkOnly, performRetrieve, purgeOnDelete, rollbackOnError, singlePackage, runTests, testLevel])

    const clear = useCallback(async () => {
        setDescribeResponse(undefined)
        setDeployId(undefined)
        setZipFile(undefined)
        setStatus(undefined)
        setAllowMissingFiles(false)
        setAutoUpdatePackage(false)
        setIgnoreWarnings(false)
        setCheckOnly(false)
        setPerformRetrieve(false)
        setPurgeOnDelete(false)
        setRollbackOnError(false)
        setSinglePackage(false)
        setRunTests([])
        setTestLevel('')

        inputRef.value = ''
      }, [inputRef])

    return <div>
        <PaddedDiv>
        <div className="slds-text-title_bold slds-form-element__label">File</div>
            <Input name="zipFile" type="file" inputRef={setInputRef} onChange={changeHandler}/>
        </PaddedDiv>
        <PaddedDiv>
        <div className="slds-text-title_bold slds-form-element__label">Parameters</div>
            <Checkbox
                id="allowMissingFiles"
                labels={{
                    label: 'Allow Missing Files'
                }}
                onChange={(_event: any, state: any) => {
                    setAllowMissingFiles(state.checked)
                }}
                checked={allowMissingFiles}
            />
            <Checkbox
                id="autoUpdatePackage"
                labels={{
                    label: 'Auto Update Package'
                }}
                onChange={(_event: any, state: any) => {
                    setAutoUpdatePackage(state.checked)
                }}
                checked={autoUpdatePackage}
            />
            <Checkbox
                id="checkOnly"
                labels={{
                    label: 'Check Only'
                }}
                onChange={(_event: any, state: any) => {
                    setCheckOnly(state.checked)
                }}
                checked={checkOnly}
            />
            <Checkbox
                id="ignoreWarnings"
                labels={{
                    label: 'Ignore Warnings'
                }}
                onChange={(_event: any, state: any) => {
                    setIgnoreWarnings(state.checked)
                }}
                checked={ignoreWarnings}
            />
            <Checkbox
                id="performRetrieve"
                labels={{
                    label: 'Perform Retrieve'
                }}
                onChange={(_event: any, state: any) => {
                    setPerformRetrieve(state.checked)
                }}
                checked={performRetrieve}
            />
            <Checkbox
                id="purgeOnDelete"
                labels={{
                    label: 'Purge On Delete'
                }}
                onChange={(_event: any, state: any) => {
                    setPurgeOnDelete(state.checked)
                }}
                checked={purgeOnDelete}
            />
            <Checkbox
                id="rollbackOnError"
                labels={{
                    label: 'Rollback On Error'
                }}
                onChange={(_event: any, state: any) => {
                    setRollbackOnError(state.checked)
                }}
                checked={rollbackOnError}
            />
            <Checkbox
                id="singlePackage"
                labels={{
                    label: 'Single Package'
                }}
                onChange={(_event: any, state: any) => {
                    setSinglePackage(state.checked)
                }}
                checked={singlePackage}
            />
        </PaddedDiv>
        <PaddedDiv>
        <div className="slds-text-title_bold slds-form-element__label">Testing</div>
          <div style={{display: 'flex'}}>
            <RadioGroup
                onChange={(event: any) => setTestLevel(event.target.value)}
                name="Test Level"
                style={{border: 0}}
            >
                <Radio
                    id="NoTestRun"
                    value="NoTestRun"
                    defaultChecked="true"
                    labels={{label: 'None'}}>

                </Radio>
                <Radio
                    id="RunLocalTests"
                    value="RunLocalTests"
                    labels={{label: 'Run Local'}}>

                </Radio>
                <Radio
                    id="RunAllTestsInOrg"
                    value="RunAllTestsInOrg"
                    labels={{label: 'Run All'}}>

                </Radio>
                <Radio
                    id="RunSpecifiedTests"
                    value="RunSpecifiedTests"
                    labels={{label: 'Run Specified'}}>

                </Radio>
            </RadioGroup>
            </div>
            {testLevel && testLevel === 'RunSpecifiedTests' && <Input type="text" placeholder="Run tests (comma separated)" onChange={(e: ChangeEvent<HTMLInputElement>) => setRunTests(e.target.value.split(','))}></Input>}
        </PaddedDiv>
        {zipFile && <Button onClick={deploy}>Deploy</Button>}
        <Button onClick={clear}>Clear</Button>
    </div>
}

export default Deploy