// Dependencies.
import { AdhocRestPayload, AdhocRestPostPayload, BaseRestPayload, 
    DeployPayload, DeployStatusPayload, DescribeObjectPayload, 
    RetrievePayload, RetrieveStatusPayload, SObjectDescribeResult, SOQLQueryPayload, UpdateRecordPayload } from '../types'


export function setAxiosAuthHeader(sid: string) {
  
}

// Used to override the default
export function setAxiosBaseURL(url: string) {

}

export async function signin(baseUrl: string) : Promise<any> {

}

export async function login(username: string, password: string, baseUrl: string, apiVersion?: string) : Promise<any> {

}

export async function describeGlobal(payload: BaseRestPayload) : Promise<any> {
    return {sobjects: [{name: "Account"}, {name: "Opportunity"}]}
}

export async function sendRest(payload: AdhocRestPayload) : Promise<any> {
    return {
        dummy: 'object',
        for: 'testing',
        here: {
            is: 'an object'
        }
    }
}

export async function postRest(payload: AdhocRestPostPayload) : Promise<any> {
    return {
        payload: payload
    }
}

export async function patchRest(payload: AdhocRestPostPayload) : Promise<any> {

}

export async function describeObject(payload: DescribeObjectPayload) : Promise<SObjectDescribeResult> {
    return {
        childRelationships: [],
        recordTypeInfos: [],
        supportedScopes: [],
        actionOverrides: [],
        fields: [{name: 'Id'}, {name: 'Name'}]
    }
}

export async function runQuery(payload: SOQLQueryPayload) : Promise<any> {
    return {
        records: [
            {
                Id: '000000000000001',
                Name: 'Testing 1'
            },
            {
                Id: '000000000000002',
                Name: 'Testing 2'
            }
        ]
    }
}

export async function sendRetrieve(payload: RetrievePayload) : Promise<any> {
  return {
    result: {
        id: 'retrieve1',
        done: false
    }
  }
}

export async function sendDeploy(payload: DeployPayload) : Promise<any> {
  return {
    result: {
        id: 'deploy1',
        done: false
    }
  }
}

export async function sendRetrieveStatus(payload: RetrieveStatusPayload) : Promise<any> {
    return {
        result: {
            id: 'retrieve1',
            done: true
        }
      }
}

export async function sendDeployStatus(payload: DeployStatusPayload) : Promise<any> {
    return {
        result: {
            id: 'deploy1',
            done: true
        }
    }
}

export async function updateRecord(payload: UpdateRecordPayload) : Promise<any> {

}

export function handleError(error: any) : string {
  return ''
}

