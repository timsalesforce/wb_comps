import { Button, Checkbox, IconSettings, Input, Radio, RadioGroup } from "@salesforce/design-system-react"
import {  ChangeEvent, FunctionComponent, useCallback, useEffect, useState } from "react"
import NProgress from 'nprogress'
import { NameAndMembers, RetrievePayload, RetrieveStatusPayload } from "../types"
import styled from "styled-components"
import React from "react"

interface Props {
    setErrorMessage: (message: string) => void
    setDescribeResponse: (response: any) => void
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

  return <div>
    <Input type="text" name="name" placeholder="Metadata Type" value={props.name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value, index)}/>
    <Input type="text" name="members" placeholder="Members (comma separated)" value={props.members} onChange={(e: ChangeEvent<HTMLInputElement>) => setMembers(e.target.value, index)}/>
  </div>
}

const Retrieve: FunctionComponent<Props> = props => {
    
    const {setErrorMessage, setDescribeResponse, setStatus} = props

    const [metadataTypes, setMetadataTypes] = useState<NameAndMembers[]>([{name: '', members: []}])
    const [retrieveId, setRetrieveId] = useState<string>()
    const [retrieveDone, setRetrieveDone] = useState<boolean>()
    const [zipFile, setZipFile] = useState<string>()
    const [packageFile, setPackageFile] = useState<File>()
    const [packageNames, setPackageNames] = useState<string[]>([])
    const [singlePackage, setSinglePackage] = useState<boolean>(false)
    const [retrieveType, setRetrieveType] = useState<string>('file')

    const [inputRef, setInputRef] = useState<any>()

    useEffect(() => {
        if (retrieveId) {
          setStatus('Request pending, checking status again in 5s...')
          const intervalId = setInterval(() => {
            NProgress.start()
            props.sendRetrieveStatus({id: retrieveId, includeZip: false, sessionId: props.sid, soapEndpoint: props.soapEndpoint}).then((response: any) => {
              if (response.result.done) {
                setStatus(undefined)
                clearInterval(intervalId)
                setRetrieveDone(true)
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
      }, [retrieveId])
    
    const downloadZip = useCallback(async () => {
        const response = await props.sendRetrieveStatus({id: retrieveId!, includeZip: true, sessionId: props.sid, soapEndpoint: props.soapEndpoint})
        setZipFile(response.result.zipFile)
    }, [retrieveId])

    const retrieve = useCallback(async () => {
      console.log(`Using ${packageFile}`)
        setZipFile(undefined)
        setRetrieveDone(false)
        setDescribeResponse(undefined)
        try {
          NProgress.start()
          const response = await props.sendRetrieve({types: metadataTypes, packageNames, singlePackage, sessionId: props.sid, soapEndpoint: props.soapEndpoint, apiVersion: props.apiVersion})
          console.log(response)
          setRetrieveId(response.result.id)
          setDescribeResponse(response.result)
        } catch (error) {
          setErrorMessage((error instanceof Error) ? error.message : error + '')
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
      setDescribeResponse(undefined)
      setMetadataTypes([{name: '', members: []}])
      setRetrieveDone(false)
      setRetrieveId(undefined)
      setZipFile(undefined)
      setStatus(undefined)
      setPackageFile(undefined)
      inputRef.value = ''
    }, [inputRef])

    const fileChangeHandler = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
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
      <IconSettings 
        iconPath="/assets/icons"
      >
        <PaddedDiv>
          <RadioGroup
              labels={{label: 'Choose Input Type'}}
              onChange={(event: any) => setRetrieveType(event.target.value)}
              name="Type"
            >
            <Radio
              id="file"
              value="file"
              defaultChecked="true"
              labels={{label: 'Package XML'}}
            />
            <Radio
              id="metadata_group"
              value="metadata_group"
              labels={{label: 'Metadata groups'}}
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
          <Input type="text" placeholder="Package names (comma sep)" onChange={(e: ChangeEvent<HTMLInputElement>) => setPackageNames(e.target.value.split(','))}></Input>
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
        <Button onClick={retrieve}>Retrieve</Button>
        <Button onClick={clear}>Clear</Button>
        {retrieveDone && !zipFile && <Button onClick={downloadZip}>Fetch Zip</Button>}
        {zipFile && <a download href={`data:application/zip;base64,${zipFile}`}>Download</a>}
      </IconSettings>
    </div>
}

export default Retrieve