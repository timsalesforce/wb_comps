import {  ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import { NameAndMembers, RetrievePayload, RetrieveStatusPayload } from "../types"
import styled from "styled-components"
import React from "react"
import { Button, Checkbox, FormControlLabel, Input, Radio, RadioGroup, TextField } from "@mui/material"
import { JsonViewer } from '@textea/json-viewer'

interface Props {
    handleError: (error: any) => void
    setObjectName: (name: string) => void
    setStatus: (staus?: string) => void
    sendRetrieve: (payload: RetrievePayload) => Promise<any>
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>
    soapEndpoint: string
    sid: string
    apiVersion: string
}

interface NMProps {
  index: number
  name: string
  members: string
  setName: (name: string, key: number) => void
  setMembers: (members: string, key: number) => void
}

const PaddedDiv = styled.div`
  padding: 1em 0;
`

const NameAndMemberComponent: FunctionComponent<NMProps> = props => {
  const {index, setName, setMembers} = props

  return <div style={{padding: '0.25em 0'}}>
    <TextField fullWidth name="name" placeholder="Metadata Type" value={props.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value, index)}/>
    <TextField fullWidth name="members" placeholder="Members (comma separated)" value={props.members} onChange={(e: ChangeEvent<HTMLInputElement>) => setMembers(e.target.value, index)}/>
  </div>
}

const Retrieve: FunctionComponent<Props> = props => {
    
    const {handleError, setStatus} = props

    const [metadataTypes, setMetadataTypes] = useState<NameAndMembers[]>([{name: '', members: []}])
    const [retrieveId, setRetrieveId] = useState<string>()
    const [retrieveDone, setRetrieveDone] = useState<boolean>()
    const [zipFile, setZipFile] = useState<string>()
    const [_packageFile, setPackageFile] = useState<File>()
    const [packageNames, setPackageNames] = useState<string[]>([])
    const [singlePackage, setSinglePackage] = useState<string>('false')
    const [retrieveType, setRetrieveType] = useState<string>('file')

    const [inputRef, setInputRef] = useState<any>()

    const [apiResponse, setApiResponse] = useState<object>()

    useEffect(() => {
        if (retrieveId) {
          setStatus('Request pending, checking status again in 5s...')
          const intervalId = setInterval(() => {
            NProgress.start()
            props.sendRetrieveStatus({id: retrieveId, includeZip: 'false', sessionId: props.sid, soapEndpoint: props.soapEndpoint}).then((response: any) => {
              if (response.result.done) {
                setStatus(undefined)
                clearInterval(intervalId)
                setRetrieveDone(true)
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
      }, [retrieveId])
    
    const downloadZip = useCallback(async () => {
        handleError('')
        const response = await props.sendRetrieveStatus({id: retrieveId!, includeZip: 'true', sessionId: props.sid, soapEndpoint: props.soapEndpoint})
        setZipFile(response.result.zipFile)
    }, [retrieveId])

    const retrieve = useCallback(async () => {
        handleError('')
        setRetrieveId(undefined)
        setZipFile(undefined)
        setRetrieveDone(false)
        setApiResponse(undefined)
        try {
          NProgress.start()
          const response = await props.sendRetrieve({types: metadataTypes, packageNames, singlePackage, sessionId: props.sid, soapEndpoint: props.soapEndpoint, apiVersion: props.apiVersion})
          setRetrieveId(response.result.id)
          setApiResponse(response.result)
        } catch (error) {
          handleError(error)
        } finally {
          NProgress.done()
          props.setObjectName('Retrieve')
        }
    }, [metadataTypes, packageNames, singlePackage])

    const addSlot = useCallback(async () => {
      const _metadataTypes = [...metadataTypes]
      _metadataTypes.push({name: '', members: []})
      setMetadataTypes(_metadataTypes)
    }, [metadataTypes])

    const removeSlot = useCallback(async () => {
      const _metadataTypes = [...metadataTypes]
      _metadataTypes.pop()
      setMetadataTypes(_metadataTypes)
    }, [metadataTypes])

    const setName = useCallback(async (name: string, index: number) => {
      const _metadataTypes = [...metadataTypes]
      const metadataType = {..._metadataTypes[index]}
      metadataType.name = name
      _metadataTypes.splice(index, 1, metadataType)
      setMetadataTypes(_metadataTypes)
    }, [metadataTypes])

    const setMembers = useCallback(async (members: string, index: number) => {
      const _metadataTypes = [...metadataTypes]
      const metadataType = {..._metadataTypes[index]}
      metadataType.members = members.split(',')
      _metadataTypes.splice(index, 1, metadataType)
      setMetadataTypes(_metadataTypes)
    }, [metadataTypes, props.soapEndpoint, props.sid, packageNames])

    const clear = useCallback(async () => {
      handleError('')
      setApiResponse(undefined)
      setMetadataTypes([{name: '', members: []}])
      setRetrieveDone(false)
      setRetrieveId(undefined)
      setZipFile(undefined)
      setStatus(undefined)
      setPackageFile(undefined)
      inputRef.value = ''
    }, [inputRef])

    const fileChangeHandler = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
      handleError('')
      if (event.target.files && event.target.files.length > 0) {
        setPackageFile(event.target.files[0])
        const _metadataTypes: NameAndMembers[] = []
        const text = await event.target.files[0].text()
        const XMLParser = require('react-xml-parser')
        const xml = new XMLParser().parseFromString(text)
        const types = xml.getElementsByTagName('types')
        types.map((t: any) => {
          const name = t.getElementsByTagName('name')[0].value
          const members = t.getElementsByTagName('members').map((m: any) => {
            return m.value
          })
          _metadataTypes.push({
            name,
            members
          })
        })
        setMetadataTypes(_metadataTypes)
      } else {
        setMetadataTypes([])
      }
  }, [])

    return <div>
        <PaddedDiv>
          <RadioGroup
              defaultValue="file"
              onChange={(event: any) => setRetrieveType(event.target.value)}
              name="Type"
            >
            <FormControlLabel
              defaultChecked={true}
              control={<Radio/>}
              id="file"
              value="file"
              label='Package XML'
            />
            <FormControlLabel
              control={<Radio/>}
              id="metadata_group"
              value="metadata_group"
              label='Metadata groups'
            />
          </RadioGroup>
        </PaddedDiv>
        <PaddedDiv>
          <legend className="slds-form-element__legend slds-form-element__label">Input</legend>
          {retrieveType === 'file' && <Input name="packageFile" type="file" inputRef={setInputRef} onChange={fileChangeHandler}/>}
          {retrieveType === 'metadata_group' && metadataTypes.map((_t, idx) => <NameAndMemberComponent name={metadataTypes[idx].name} members={metadataTypes[idx].members.join(',')} setName={setName} setMembers={setMembers} key={idx} index={idx}/>)}
          {retrieveType === 'metadata_group' && <Button onClick={addSlot}>More</Button>}
          {retrieveType === 'metadata_group' && metadataTypes.length > 1 && <Button onClick={removeSlot}>Less</Button>}
        </PaddedDiv>
        <PaddedDiv>
          <legend className="slds-form-element__legend slds-form-element__label">Parameters</legend>
          <TextField fullWidth placeholder="Package names (comma sep)" value={packageNames} onChange={(e: ChangeEvent<HTMLInputElement>) => setPackageNames(e.target.value.split(','))}></TextField>
          <FormControlLabel
                control={<Checkbox/>}
                id="singlePackage"
                label='Single Package'
                onChange={(_event: any, checked: boolean) => {
                    setSinglePackage(checked + '')
                }}
                checked={singlePackage === 'true'}
            />
        </PaddedDiv>
        <Button onClick={retrieve}>Retrieve</Button>
        <Button onClick={clear}>Clear</Button>
        {retrieveDone && !zipFile && <Button onClick={downloadZip}>Fetch Zip</Button>}
        {zipFile && <a download href={`data:application/zip;base64,${zipFile}`}>Download</a>}
        <JsonViewer rootName="Retrieve" defaultInspectDepth={1} value={apiResponse}/>
    </div>
}

export default Retrieve