// Dependencies.
import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { AdhocRestPayload, AdhocRestPostPayload, BaseRestPayload, DeployPayload, DeployStatusPayload, DescribeObjectPayload, FetchRecordPayload, RetrievePayload, RetrieveStatusPayload, SoapPayload, SObjectDescribeResult, SOQLQueryPayload, UpdateRecordPayload } from '../types'
import { CheckDeployStatusResponse, CheckRetrieveStatusResponse, createClientAsync as mdClient, DeployResponse, MetadataClient, RetrieveResponse } from '../wsdl/metadata'

const parserOptions = {
  ignoreAttributes: true,
  transformTagName: (tagName: string) => {
    return tagName.substring(tagName.indexOf(':') + 1) || tagName
  }
}

const extensionApi = axios.create()

export function setAxiosAuthHeader(sid: string) {
  extensionApi.defaults.headers.common['Authorization'] = `Bearer ${sid}`
}

// Used to override the default
export function setAxiosBaseURL(url: string) {
  extensionApi.defaults.baseURL = url
}

export async function signin(baseUrl: string) : Promise<any> {
    setAxiosBaseURL(baseUrl)
    return {baseUrl}
}

export async function login(username: string, password: string, baseUrl: string, apiVersion?: string) : Promise<any> {
  setAxiosBaseURL(baseUrl)
  const parser = new XMLParser(parserOptions);
  const xmlPayload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="urn:partner.soap.sforce.com"
    xmlns:fns="urn:fault.partner.soap.sforce.com" xmlns:ens="urn:sobject.partner.soap.sforce.com">
      <soap:Body>
          <login xmlns="urn:partner.soap.sforce.com">
             <username>${username}</username>
             <password>${password}</password>
          </login>
      </soap:Body>
  </soap:Envelope>`
  const response = await extensionApi.post(`${baseUrl}/services/Soap/u/${apiVersion}`, 
    xmlPayload, {
      headers: { 
        'Content-Type': 'text/xml',
        'SOAPAction': 'Login'
      }
    })
  return parser.parse(response.data).Envelope.Body.loginResponse.result
}

export async function describeGlobal(payload: BaseRestPayload) : Promise<any> {
  const response = await extensionApi.get(`/services/data/v${payload.apiVersion}/sobjects`)
  return response.data
}

export async function sendRest(payload: AdhocRestPayload) : Promise<any> {
  const response = await extensionApi.get(`${payload.endpoint}`)
  return response.data
}

export async function postRest(payload: AdhocRestPostPayload) : Promise<any> {
  const response = await extensionApi.post(`${payload.endpoint}`, payload.body)
  return response.data
}

export async function patchRest(payload: AdhocRestPostPayload) : Promise<any> {
  const response = await extensionApi.patch(`${payload.endpoint}`, payload.body)
  return response.data
}

export async function describeObject(payload: DescribeObjectPayload) : Promise<SObjectDescribeResult> {
  const response = await extensionApi.get(`/services/data/v${payload.apiVersion}/sobjects/${payload.object}/describe`)
  return response.data
}

export async function runQuery(payload: SOQLQueryPayload) : Promise<any> {
  const response = await extensionApi.get(`/services/data/v${payload.apiVersion}/query?q=${payload.query}`)
  return response.data
}

export async function sendRetrieve(payload: RetrievePayload) : Promise<RetrieveResponse> {
  const client = await getMdSoapClient(payload)
  const response = await client.retrieveAsync({retrieveRequest: payload})
  return response[0]
}

export async function sendRetrieveStatus(payload: RetrieveStatusPayload) : Promise<CheckRetrieveStatusResponse> {
  const client = await getMdSoapClient(payload)
  const response = await client.checkRetrieveStatusAsync(payload)
  return response[0]
}

export async function sendDeploy(payload: DeployPayload) : Promise<DeployResponse> {
  const client = await getMdSoapClient(payload)
  const response = await client.deployAsync(payload)
  return response[0]
}

export async function sendDeployStatus(payload: DeployStatusPayload) : Promise<CheckDeployStatusResponse> {
 const client = await getMdSoapClient(payload)
 const response = await client.checkDeployStatusAsync(payload)
 return response[0]
}

export async function fetchRecord(payload: FetchRecordPayload) : Promise<object> {
  const response = await extensionApi.get(`/services/data/v${payload.apiVersion}/sobjects/${payload.objectName}/${payload.objectId}`)
  return response.data
}

export async function updateRecord(payload: UpdateRecordPayload) : Promise<any> {
  const response = await extensionApi.patch(`/services/data/v${payload.apiVersion}/sobjects/${payload.objectName}/${payload.objectId}`, 
    payload.body,
    {
      headers: { 
        'Content-Type': 'application/json',
      }
    })
  return response.data
}

async function getMdSoapClient(payload: SoapPayload) : Promise<MetadataClient> {
  const client = await mdClient('../wsdl/metadata')
  client.setEndpoint(payload.soapEndpoint)
  client.setSOAPAction('CheckDeployStatus')
  client.addSoapHeader({SessionHeader: {sessionId: payload.sessionId}}, 'sessionId', 'tns')
  return client
}

