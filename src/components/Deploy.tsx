import { ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import styled from "styled-components"
import { DeployPayload, DeployStatusPayload } from "../types/index"
import React from "react"
import Checkbox from "@mui/material/Checkbox/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel"
import RadioGroup from "@mui/material/RadioGroup/RadioGroup"
import Radio from "@mui/material/Radio/Radio"
import Button from "@mui/material/Button/Button"
import { TextField, Input } from "@mui/material"
import { JsonViewer } from '@textea/json-viewer'

export interface Props {
    handleError: (error: any) => void
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
const ParametersGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

const RadioGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`

const Deploy: FunctionComponent<Props> = props => {
    
    const {handleError, setStatus} = props

    const [deployId, setDeployId] = useState<string>()
    const [zipFile, setZipFile] = useState<string>()
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

    const [apiResponse, setApiResponse] = useState<object>()

    useEffect(() => {
        if (deployId) {
          setStatus('Request pending, checking status again in 5s...')
          const intervalId = setInterval(() => {
            NProgress.start()
            props.sendDeployStatus({id: deployId, includeDetails: true, sessionId: props.sid, soapEndpoint: props.soapEndpoint}).then((response: any) => {
              if (response.result.done) {
                setStatus(undefined)
                clearInterval(intervalId)
                setApiResponse(response.result)
              }
            }).catch((error: any) => {
              handleError(error)
              clearInterval(intervalId)
            }).finally(() => {
              NProgress.done()
            })
          }, 5000)
        }
      }, [deployId])

    const changeHandler = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]
        if (file) {
            setZipFile(await base64(file))
        }
    }, [])

    const base64 = useCallback(async (file: File) : Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result?.toString().replace(/^data:application\/zip;base64,/, '') || '');
            reader.onerror = error => reject(error);
        })
    }, [])

    const deploy = useCallback(async () => {
        setApiResponse(undefined)
        handleError('')

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
          setApiResponse(response.result)
        } catch (error) {
            handleError(error)
        } finally {
          NProgress.done()
          props.setObjectName('Deploy')
        }
    }, [zipFile, allowMissingFiles, autoUpdatePackage, ignoreWarnings, checkOnly, performRetrieve, purgeOnDelete, rollbackOnError, singlePackage, runTests, testLevel])

    const clear = useCallback(async () => {
        handleError('')
        setApiResponse(undefined)
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
        <div>File</div>
            <Input name="zipFile" type="file" inputRef={setInputRef} onChange={changeHandler}/>
        </PaddedDiv>
        <PaddedDiv>
            <div>Parameters</div>
            <ParametersGrid>
                <FormControlLabel
                    label="Allow missing files"
                    control={<Checkbox></Checkbox>}
                    id="allowMissingFiles"
                    onChange={(_event: any, checked: boolean) => {
                        setAllowMissingFiles(checked)
                    }}
                    checked={allowMissingFiles}
                />
                <FormControlLabel
                    id="autoUpdatePackage"
                    control={<Checkbox></Checkbox>}
                    label='Auto Update Package'
                    onChange={(_event: any, checked: boolean) => {
                        setAutoUpdatePackage(checked)
                    }}
                    checked={autoUpdatePackage}
                />
                <FormControlLabel
                    id="checkOnly"
                    control={<Checkbox></Checkbox>}
                    label='Check Only'
                    onChange={(_event: any, checked: boolean) => {
                        setCheckOnly(checked)
                    }}
                    checked={checkOnly}
                />
                <FormControlLabel
                    id="ignoreWarnings"
                    control={<Checkbox></Checkbox>}
                    label='Ignore Warnings'
                    onChange={(_event: any, checked: boolean) => {
                        setIgnoreWarnings(checked)
                    }}
                    checked={ignoreWarnings}
                />
                <FormControlLabel
                    id="performRetrieve"
                    control={<Checkbox></Checkbox>}
                    label='Perform Retrieve'
                    onChange={(_event: any, checked: boolean) => {
                        setPerformRetrieve(checked)
                    }}
                    checked={performRetrieve}
                />
                <FormControlLabel
                    id="purgeOnDelete"
                    control={<Checkbox></Checkbox>}
                    label='Purge On Delete'
                    onChange={(_event: any, checked: boolean) => {
                        setPurgeOnDelete(checked)
                    }}
                    checked={purgeOnDelete}
                />
                <FormControlLabel
                    id="rollbackOnError"
                    control={<Checkbox></Checkbox>}
                    label='Rollback On Error'
                    onChange={(_event: any, checked: boolean) => {
                        setRollbackOnError(checked)
                    }}
                    checked={rollbackOnError}
                />
                <FormControlLabel
                    id="singlePackage"
                    control={<Checkbox></Checkbox>}
                    label='Single Package'
                    onChange={(_event: any, checked: boolean) => {
                        setSinglePackage(checked)
                    }}
                    checked={singlePackage}
                />
            </ParametersGrid>
        </PaddedDiv>
        <PaddedDiv>
        <div>Testing</div>
                <RadioGroup
                    defaultValue="NoTestRun"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setTestLevel(event.target.value)}
                    name="Test Level"
                    style={{border: 0}}>
                        <RadioGrid>
                            <FormControlLabel
                                control={<Radio></Radio>}
                                id="NoTestRun"
                                value="NoTestRun"
                                label='None'/>
                            <FormControlLabel
                                control={<Radio></Radio>}
                                id="RunLocalTests"
                                value="RunLocalTests"
                                label='Run Local'/>
                            <FormControlLabel
                                control={<Radio></Radio>}
                                id="RunAllTestsInOrg"
                                value="RunAllTestsInOrg"
                                label='Run All'/>
                            <FormControlLabel
                                control={<Radio></Radio>}
                                id="RunSpecifiedTests"
                                value="RunSpecifiedTests"
                                label='Run Specified'/>
                        </RadioGrid>
                </RadioGroup>
            {testLevel && testLevel === 'RunSpecifiedTests' && <TextField fullWidth placeholder="Run tests (comma separated)" onChange={(e: ChangeEvent<HTMLInputElement>) => setRunTests(e.target.value.split(','))}/>}
        </PaddedDiv>
        {zipFile && <Button onClick={deploy}>Deploy</Button>}
        <Button onClick={clear}>Clear</Button>
        <JsonViewer rootName="Deploy" defaultInspectDepth={1} value={apiResponse}/>
    </div>
}

export default Deploy