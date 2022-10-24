export type TestLevel = 'NoTestRun' | 'RunLocalTests' | 'RunAllTestsInOrg' | 'RunSpecifiedTests'

export type ApiType = 'direct' | 'middle' | 'stub' | 'custom'

export interface Option {
    value: string
    label: string
}

export interface SObjectField {
    name: string
}

export interface SObjectDescribeResult {
    childRelationships: any[]
    recordTypeInfos: any[]
    supportedScopes: any[]
    actionOverrides: any[]
    fields: any[]
}

export interface FieldOption {
    label: string
    subTitle: string
    id: number
    type: string
}

export interface QueryField {
    name: string
    value: string
}

export interface QueryRecord {
    fields: QueryField[]
}

export interface QueryResult {
    totalSize: number
    done: boolean
    records: any[]
}

export interface NameAndMembers {
    name: string
    members: string[]
}

export interface RetrievePayload {
    types: NameAndMembers[]
    packageNames: string[]
    singlePackage: boolean
    sessionId: string
    soapEndpoint: string
    apiVersion: string
}

export interface RetrieveStatusPayload {
    id: string
    includeZip: boolean
    sessionId: string
    soapEndpoint: string
}

export interface DeployPayload {
    autoUpdatePackage: boolean
    checkOnly: boolean
    ignoreWarnings: boolean
    performRetrieve: boolean
    purgeOnDelete: boolean
    rollbackOnError: boolean
    runTests?: string[]
    singlePackage: boolean
    testLevel: string
    allowMissingFiles: boolean
    zipFile?: string
    sessionId?: string
    soapEndpoint: string
}
export interface DeployStatusPayload {
    id: string
    includeDetails: boolean
    sessionId: string
    soapEndpoint: string
}

export interface BaseRestPayload {
    apiVersion: string
    sfdcBaseUrl: string
    verb?: string
}

export interface AdhocRestPayload extends BaseRestPayload {
    endpoint: string
}

export interface AdhocRestPostPayload extends AdhocRestPayload {
    body: string
}

export interface DescribeObjectPayload extends BaseRestPayload {
    object: string
}

export interface SOQLQueryPayload extends BaseRestPayload {
    query: string
}

export interface UpdateRecordPayload extends BaseRestPayload {
    objectName: string
    objectId: string
    body: string
}

export interface FetchRecordPayload extends BaseRestPayload {
    objectName: string
    objectId: string
}

export interface LoginResponse {
    metadataServerUrl: string
    passwordExpired: boolean
    sandbox: boolean
    serverUrl: string
    sessionId: string
    userId: string
    userInfo: any
}

export interface SfdcApi {
    setAxiosAuthHeader: (sid: string) => void
    setAxiosBaseURL: (url: string) => void
    setMiddleUrl?: (url: string) => void
    signin: (baseUrl: string) => Promise<any>
    login: (username: string, password: string, baseUrl: string, apiVersion?: string) => Promise<LoginResponse>
    signout?: () => Promise<any>
    describeGlobal: (payload: BaseRestPayload) => Promise<any>
    sendRest: (payload: AdhocRestPayload) => Promise<any>
    postRest: (payload: AdhocRestPostPayload) => Promise<any>
    patchRest: (payload: AdhocRestPostPayload) => Promise<any>
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>
    runQuery: (payload: SOQLQueryPayload) => Promise<any>
    sendRetrieve: (payload: RetrievePayload) => Promise<any>
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>
    sendDeploy: (payload: DeployPayload) => Promise<any>
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>
    updateRecord: (payload: UpdateRecordPayload) => Promise<any>
    fetchRecord: (payload: FetchRecordPayload) => Promise<object>
}