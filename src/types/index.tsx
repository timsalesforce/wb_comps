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

export interface SoapPayload {
    soapEndpoint: string
    sessionId: string
}

export interface RetrievePayload extends SoapPayload {
    types: NameAndMembers[]
    packageNames: string[]
    singlePackage: string
    apiVersion: string
}

export interface RetrieveStatusPayload extends SoapPayload {
    id: string
    includeZip: string
}

export interface DeployPayload extends SoapPayload {
    DeployOptions: {
        autoUpdatePackage: string
        checkOnly: string
        ignoreWarnings: string
        performRetrieve: string
        purgeOnDelete: string
        rollbackOnError: string
        runTests?: string[]
        singlePackage: string
        testLevel: string
        allowMissingFiles: string
    }
    ZipFile?: string
}

export interface DeployStatusPayload extends SoapPayload {
    asyncProcessId: string
    includeDetails: string
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