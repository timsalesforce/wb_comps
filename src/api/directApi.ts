// Dependencies.
import axios from 'axios'
import { XMLParser } from 'fast-xml-parser'
import { AdhocRestPayload, AdhocRestPostPayload, BaseRestPayload, DeployPayload, DeployStatusPayload, DescribeObjectPayload, RetrievePayload, RetrieveStatusPayload, SObjectDescribeResult, SOQLQueryPayload, UpdateRecordPayload } from '../types'

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

export async function sendRetrieve(payload: RetrievePayload) : Promise<any> {
  const parser = new XMLParser(parserOptions);
  const xmlPayload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://soap.sforce.com/2006/04/metadata">
      <soap:Header>
          <tns:SessionHeader>
              <sessionId>${payload.sessionId}</sessionId>
          </tns:SessionHeader>
      </soap:Header>
      <soap:Body>
          <retrieve xmlns="http://soap.sforce.com/2006/04/metadata">
              <retrieveRequest>
                  <apiVersion>${payload.apiVersion}</apiVersion>
                  <singlePackage>${payload.singlePackage}</singlePackage>
                  <unpackaged>
                      ${payload.types.map(t => `<types><name>${t.name}</name><members>${t.members}</members></types>`)}
                  </unpackaged>
              </retrieveRequest>
          </retrieve>
      </soap:Body>
  </soap:Envelope>`
  const response = await extensionApi.post(payload.soapEndpoint, 
    xmlPayload, {
      headers: { 
        'Content-Type': 'text/xml',
        'SOAPAction': 'Retrieve'
      }
    })
  return parser.parse(response.data).Envelope.Body.retrieveResponse
}

export async function sendDeploy(payload: DeployPayload) : Promise<any> {
  const parser = new XMLParser(parserOptions);
  const fileText = await payload.zipFile?.text()
  const xmlPayload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://soap.sforce.com/2006/04/metadata">
      <soap:Header>
          <tns:SessionHeader>
              <sessionId>${payload.sessionId}</sessionId>
          </tns:SessionHeader>
      </soap:Header>
      <soap:Body>
          <deploy xmlns="http://soap.sforce.com/2006/04/metadata">
              <ZipFile>${Buffer.from(fileText || '', 'base64')}ZipFile>
              <DeployOptions>
                <allowMissingFiles>${payload.allowMissingFiles}</allowMissingFiles>
                <autoUpdatePackage>${payload.autoUpdatePackage}</autoUpdatePackage>
                <checkOnly>${payload.checkOnly}</checkOnly>
                <ignoreWarnings>${payload.ignoreWarnings}</ignoreWarnings>
                <performRetrieve>${payload.performRetrieve}</performRetrieve>
                <purgeOnDelete>${payload.purgeOnDelete}</purgeOnDelete>
                <rollbackOnError>${payload.rollbackOnError}</rollbackOnError>
                ${payload.runTests && `<runTests>${payload.runTests}</runTests>`}
                <singlePackage>${payload.singlePackage}</singlePackage>
                <testLevel>${payload.testLevel}</testLevel>
              </DeployOptions>
          </deploy>
      </soap:Body>
  </soap:Envelope>`
  const response = await extensionApi.post(payload.soapEndpoint, 
    xmlPayload, {
      headers: { 
        'Content-Type': 'text/xml',
        'SOAPAction': 'Deploy'
      }
    })
  return parser.parse(response.data).Envelope.Body.deployResponse  
}

export async function sendRetrieveStatus(payload: RetrieveStatusPayload) : Promise<any> {
  const parser = new XMLParser(parserOptions);
  const xmlPayload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://soap.sforce.com/2006/04/metadata">
      <soap:Header>
          <tns:SessionHeader>
              <sessionId>${payload.sessionId}</sessionId>
          </tns:SessionHeader>
      </soap:Header>
      <soap:Body>
          <checkRetrieveStatus xmlns="http://soap.sforce.com/2006/04/metadata">
            <id>${payload.id}</id>
            <includeZip>${payload.includeZip}</includeZip>
          </checkRetrieveStatus>
      </soap:Body>
  </soap:Envelope>`
  const response = await extensionApi.post(payload.soapEndpoint, 
    xmlPayload, {
      headers: { 
        'Content-Type': 'text/xml',
        'SOAPAction': 'CheckRetrieveStatus'
      }
    })
  console.log(parser.parse(response.data))
  return parser.parse(response.data).Envelope.Body.checkRetrieveStatusResponse
}

export async function sendDeployStatus(payload: DeployStatusPayload) : Promise<any> {
  const parser = new XMLParser(parserOptions);
  const xmlPayload = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tns="http://soap.sforce.com/2006/04/metadata">
      <soap:Header>
          <tns:SessionHeader>
              <sessionId>${payload.sessionId}</sessionId>
          </tns:SessionHeader>
      </soap:Header>
      <soap:Body>
          <checkDeployStatus xmlns="http://soap.sforce.com/2006/04/metadata">
            <id>${payload.id}</id>
            <includeDetails>${payload.includeDetails}</includeDetails>
          </checkDeployStatus>
      </soap:Body>
  </soap:Envelope>`
  const response = await extensionApi.post(payload.soapEndpoint, 
    xmlPayload, {
      headers: { 
        'Content-Type': 'text/xml',
        'SOAPAction': 'CheckDeployStatus'
      }
    })
  console.log(parser.parse(response.data))
  return parser.parse(response.data).Envelope.Body.checkDeployStatusResponse
}

export async function updateRecord(payload: UpdateRecordPayload) : Promise<any> {
  const response = await extensionApi.post(`/updateRecord`, payload)
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

