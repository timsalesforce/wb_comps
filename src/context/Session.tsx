// Dependencies.
import React, {createContext, useState, useCallback, FunctionComponent} from 'react'
import NProgress from 'nprogress'
import { SfdcApi } from '../types'
import * as apiStub from '../api/apiStub'

// Context Interface.
interface SessionContext {

  // Data.
  sid?: string
  sfdcBaseUrl: string
  objects: string[]
  apiVersion: string
  soapEndpoint: string

  api: SfdcApi
  
  // Functions.
  setSid: React.Dispatch<string>
  setApiVersion: React.Dispatch<string>
  setObjects: React.Dispatch<string[]>
  setSfdcBaseUrl: React.Dispatch<string>
  setSoapEndpoint: React.Dispatch<string>
  signin: (sid: string, baseUrl: string, apiVersion: string) => Promise<any>
  login: (username: string, password: string, baseUrl: string, apiVersion: string) => Promise<any>
  signout: () => Promise<any>
  fetchObjects: () => Promise<any>

  setApi: React.Dispatch<any>
}

// Context.
export const Context = createContext<SessionContext>({

  // Data.
  sid: '',
  sfdcBaseUrl: '',
  objects: [],
  apiVersion: '',
  soapEndpoint: '',

  api: apiStub,

  // Functions.
  setObjects: () => {},
  setSid: () => {},
  setApiVersion: () => {},
  setSoapEndpoint: () => {},
  setSfdcBaseUrl: () => {},
  signin: async () => {},
  login: async () => {},
  signout: async () => {},
  fetchObjects: async () => {},

  setApi: async () => {},
})

// Provider.
export const Provider: FunctionComponent<{children: any[]}> = props => {

  // Data.
  const [sid, setSid] = useState<string>('')
  const [apiVersion, setApiVersion] = useState<string>('')
  const [sfdcBaseUrl, setSfdcBaseUrl] = useState<string>('')
  const [soapEndpoint, setSoapEndpoint] = useState<string>('')
  const [objects, setObjects] = useState<string[]>([])
  const [api, setApi] = useState<any>()

  const data = {
    api,
    sid,
    sfdcBaseUrl,
    objects,
    apiVersion,
    soapEndpoint
  }

  const signin = useCallback(async (sid: string, sfdcBaseUrl: string, apiVersion: string) => {
    try {
      NProgress.start()
      api.setAxiosAuthHeader(sid)
      api.resetAxiosBaseURL()
      await api.signin(sfdcBaseUrl)

      setApiVersion(apiVersion)
      window.localStorage.setItem('apiVersion', apiVersion)

      const soapEndpoint = `${sfdcBaseUrl}/services/Soap/m/${apiVersion}`
      setSoapEndpoint(soapEndpoint)
      window.localStorage.setItem('soapEndpoint', soapEndpoint)

      window.localStorage.setItem('sid', sid)
      setSid(sid)

      setSfdcBaseUrl(sfdcBaseUrl)
      window.localStorage.setItem('sfdcBaseUrl', sfdcBaseUrl)

      // Load sobjects, and if the call succeeds, set
      // the state for subsequent calls
      await fetchObjects(apiVersion, sfdcBaseUrl)
    } catch (error) {
      throw error
    } finally {
      NProgress.done()
    }
  }, [api])

  const login = useCallback(async (username: string, password: string, sfdcBaseUrl: string, apiVersion: string) => {
    try {
      NProgress.start()
      api.resetAxiosBaseURL()
      const response = await api.login(username, password, sfdcBaseUrl, apiVersion)
      setApiVersion(apiVersion)
      window.localStorage.setItem('apiVersion', apiVersion)
      api.setAxiosAuthHeader(response.sessionId)
      setSid(response.sessionId)
      setSoapEndpoint(response.metadataServerUrl)
      setSfdcBaseUrl(sfdcBaseUrl)
      window.localStorage.setItem('soapEndpoint', response.metadataServerUrl)
      window.localStorage.setItem('sid', response.sessionId)
      setSfdcBaseUrl(sfdcBaseUrl)
      window.localStorage.setItem('sfdcBaseUrl', sfdcBaseUrl)

      // Load sobjects
      fetchObjects(apiVersion, sfdcBaseUrl)
    } catch (error) {
      throw error
    } finally {
      NProgress.done()
    }
  }, [api])

  const fetchObjects = useCallback(async (apiVersionOverride?: string, sfdcBaseUrlOverride?: string) => {
    if (!objects || objects.length === 0) {
      NProgress.start()
      try {
        const response = await api.describeGlobal({sfdcBaseUrl: sfdcBaseUrlOverride || sfdcBaseUrl, apiVersion: apiVersionOverride || apiVersion})
        response && response.sobjects && setObjects(response.sobjects.map((o: any) => o.name))
      } finally {
        NProgress.done()
      }
    }
  }, [objects, apiVersion, sfdcBaseUrl, api])

  const signout = useCallback(async () => {
    try {
      NProgress.start()
      window.localStorage.clear()
      await api.signout()
    } catch (error) {
      throw error
    } finally {
      NProgress.done()
    }
    setSid('')
    setSfdcBaseUrl('')
    setObjects([])
    setApiVersion('')
    setSoapEndpoint('')
    api.setAxiosAuthHeader('')
  }, [api])

  // Functions.
  const functions = {
    setApi,
    setSid,
    setObjects,
    setApiVersion,
    setSfdcBaseUrl,
    setSoapEndpoint,
    signin,
    login,
    signout,
    fetchObjects
  }

  // Value.
  const value: SessionContext = {...data, ...functions}

  // Provider.
  return <Context.Provider value={value}>{props.children}</Context.Provider>

}
