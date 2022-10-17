// Dependencies.
import {ChangeEvent, FunctionComponent, useCallback, useState} from 'react'
import styled from 'styled-components'
import NProgress from 'nprogress'
import React from 'react'
import { Button, TextField } from '@mui/material'
import { H2 } from '../elements'

const Container = styled.div`
    text-align: center;
    padding: 3em;
    max-width: 500px;
    margin: auto;
`

interface Props {
  handleError: (error: any) => void
  signin: (sid: string, baseUrl: string, apiVersion: string) => Promise<any>
  login: (username: string, password: string, baseUrl: string, apiVersion: string) => Promise<any>
}

// Index Page.
const Signin: FunctionComponent<Props> = (props) => {

  const {handleError} = props

  const [sid, setSid] = useState<string>('');
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
        handleError(error)
    } finally {
        NProgress.done()
    }
  }, [sid, baseUrl, username, password, apiVersion])


  // ..
  return <Container>
    <H2 className="slds-text-title_caps slds-p-vertical_medium">Sign In</H2>
    <TextField fullWidth name="username" placeholder="Username" onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
    <TextField fullWidth type="password" name="password" placeholder="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
    <TextField fullWidth type="text" name="sid" placeholder="Session ID" onChange={(e: ChangeEvent<HTMLInputElement>) => setSid(e.target.value)}/>
    <TextField fullWidth type="text" name="base-url" placeholder="Instance URL" onChange={(e: ChangeEvent<HTMLInputElement>) => setBaseUrl(e.target.value)}/>
    <TextField fullWidth type="text" name="api-version" placeholder="API Version" onChange={(e: ChangeEvent<HTMLInputElement>) => setApiVersion(e.target.value)}/>
    <Button onClick={doSignin}>Sign In</Button>
  </Container>
}
export default Signin