// Dependencies.
import {ChangeEvent, FunctionComponent, useCallback, useState} from 'react'
import styled from 'styled-components'
import { Button, Input } from '@salesforce/design-system-react'
import NProgress from 'nprogress'
import React from 'react'

const ErrorDiv = styled.div`
    color: red;
`

const Container = styled.div`
    text-align: center;
    padding: 3em;
    max-width: 500px;
    margin: auto;
`

interface Props {
  signin: (sid: string, baseUrl: string, apiVersion: string) => Promise<any>
  login: (username: string, password: string, baseUrl: string, apiVersion: string) => Promise<any>
}

// Index Page.
const Signin: FunctionComponent<Props> = (props) => {

  const [sid, setSid] = useState<string>('');
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [apiVersion, setApiVersion] = useState<string>('55.0')

  const doSignin = useCallback(async () => {
    NProgress.start()
    try {
      if (sid) {
        await props.signin(sid, baseUrl, apiVersion)
      } else {
        await props.login(username, password, baseUrl, apiVersion)
      }
    } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : error + '')
    } finally {
        NProgress.done()
    }
  }, [sid, baseUrl, username, password, apiVersion])


  // ..
  return <Container>
    <h1 className="slds-text-title_caps slds-p-vertical_medium">Sign In</h1>
    {errorMessage && <ErrorDiv>Signin failed: {errorMessage}</ErrorDiv>}
    <Input className="slds-p-around_xxx-small" type="text" name="username" placeholder="Username" onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}></Input>
    <Input className="slds-p-around_xxx-small" type="password" name="password" placeholder="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></Input>
    <Input className="slds-p-around_xxx-small" type="text" name="sid" placeholder="Session ID" onChange={(e: ChangeEvent<HTMLInputElement>) => setSid(e.target.value)}></Input>
    <Input className="slds-p-around_xxx-small" type="text" name="base-url" placeholder="Instance URL" onChange={(e: ChangeEvent<HTMLInputElement>) => setBaseUrl(e.target.value)}></Input>
    <Input className="slds-p-around_xxx-small" type="text" name="api-version" placeholder="API Version" onChange={(e: ChangeEvent<HTMLInputElement>) => setApiVersion(e.target.value)}></Input>
    <Button onClick={doSignin}>Sign In</Button>
  </Container>
}
export default Signin