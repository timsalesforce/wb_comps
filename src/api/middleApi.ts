// Dependencies.
import axios from 'axios'
import { AdhocRestPayload, AdhocRestPostPayload, BaseRestPayload, DeployPayload, DeployStatusPayload, DescribeObjectPayload, RetrievePayload, RetrieveStatusPayload, SObjectDescribeResult, SOQLQueryPayload, UpdateRecordPayload } from '../types'

export function setAxiosAuthHeader(sid: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${sid}`
}

// Used to override the default
export function setAxiosBaseURL(url: string) {
  axios.defaults.baseURL = url
}

export async function signin(baseUrl: string) : Promise<any> {
  const response = await axios.post(`/signin`, {baseUrl})
  return response.data
}

export async function login(username: string, password: string, baseUrl: string, apiVersion?: string) : Promise<any> {
  const response = await axios.post(`/login`, {username, password, baseUrl, apiVersion})
  return response.data
}

export async function signout() : Promise<any> {
  const response = await axios.get(`/signout`)
  return response.data
}

export async function describeGlobal(payload: BaseRestPayload) : Promise<any> {
  const response = await axios.post(`/describeGlobal`, payload)
  return response.data
}

export async function sendRest(payload: AdhocRestPayload) : Promise<any> {
  const response = await axios.post(`/get-rest`, payload)
  return response.data
}

export async function postRest(payload: AdhocRestPostPayload) : Promise<any> {
  const response = await axios.post(`/post-rest`, payload)
  return response.data
}

export async function patchRest(payload: AdhocRestPostPayload) : Promise<any> {
  const response = await axios.post(`/patch-rest`, payload)
  return response.data
}

export async function describeObject(payload: DescribeObjectPayload) : Promise<SObjectDescribeResult> {
  const response = await axios.post(`/describeObject`, payload)
  return response.data
}

export async function runQuery(payload: SOQLQueryPayload) : Promise<any> {
  const response = await axios.post(`/query`, payload)
  return response.data
}

export async function sendRetrieve(payload: RetrievePayload) : Promise<any> {
  const response = await axios.post(`/retrieve`, payload)
  return response.data
}

export async function sendDeploy(payload: DeployPayload) : Promise<any> {
  const response = await axios.post(`/deploy`, payload)
  return response.data
}

export async function sendRetrieveStatus(payload: RetrieveStatusPayload) : Promise<any> {
  const response = await axios.post(`/retrieveStatus`, payload)
  return response.data
}

export async function sendDeployStatus(payload: DeployStatusPayload) : Promise<any> {
  const response = await axios.post(`/deployStatus`, payload)
  return response.data
}

export async function updateRecord(payload: UpdateRecordPayload) : Promise<any> {
  const response = await axios.post(`/updateRecord`, payload)
  return response.data
}

export function handleError(error: any) : string {
  const status = error.response && error.response.status
  let msg = error instanceof Error ? error.message : error + ''
  if (status === 401) {
    msg += `, try logging in again`
  }
  return msg
}
