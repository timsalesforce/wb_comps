declare type TestLevel = 'NoTestRun' | 'RunLocalTests' | 'RunAllTestsInOrg' | 'RunSpecifiedTests';
interface Option {
    value: string;
    label: string;
}
interface SObjectField {
    name: string;
}
interface SObjectDescribeResult {
    childRelationships: any[];
    recordTypeInfos: any[];
    supportedScopes: any[];
    actionOverrides: any[];
    fields: SObjectField[];
}
interface FieldOption {
    label: string;
    subTitle: string;
    id: number;
    type: string;
}
interface QueryField {
    name: string;
    value: string;
}
interface QueryRecord {
    fields: QueryField[];
}
interface QueryResult {
    totalSize: number;
    done: boolean;
    records: any[];
}
interface NameAndMembers {
    name: string;
    members: string[];
}
interface RetrievePayload {
    types: NameAndMembers[];
    packageNames: string[];
    singlePackage: boolean;
    sessionId: string;
    soapEndpoint: string;
    apiVersion: string;
}
interface RetrieveStatusPayload {
    id: string;
    includeZip: boolean;
    sessionId: string;
    soapEndpoint: string;
}
interface DeployPayload {
    autoUpdatePackage: boolean;
    checkOnly: boolean;
    ignoreWarnings: boolean;
    performRetrieve: boolean;
    purgeOnDelete: boolean;
    rollbackOnError: boolean;
    runTests?: string[];
    singlePackage: boolean;
    testLevel: string;
    allowMissingFiles: boolean;
    zipFile?: File;
    sessionId?: string;
    soapEndpoint: string;
}
interface DeployStatusPayload {
    id: string;
    includeDetails: boolean;
    sessionId: string;
    soapEndpoint: string;
}
interface BaseRestPayload {
    apiVersion: string;
    sfdcBaseUrl: string;
    verb?: string;
}
interface AdhocRestPayload extends BaseRestPayload {
    endpoint: string;
}
interface AdhocRestPostPayload extends AdhocRestPayload {
    body: string;
}
interface DescribeObjectPayload extends BaseRestPayload {
    object: string;
}
interface SOQLQueryPayload extends BaseRestPayload {
    query: string;
}
interface UpdateRecordPayload extends BaseRestPayload {
    objectName: string;
    objectId: string;
    body: string;
}
interface SfdcApi {
    setAxiosAuthHeader: (sid: string) => void;
    setAxiosBaseURL: (url: string) => void;
    signin: (baseUrl: string) => Promise<any>;
    login: (username: string, password: string, baseUrl: string, apiVersion?: string) => Promise<any>;
    signout: () => Promise<any>;
    describeGlobal: (payload: BaseRestPayload) => Promise<any>;
    sendRest: (payload: AdhocRestPayload) => Promise<any>;
    postRest: (payload: AdhocRestPostPayload) => Promise<any>;
    patchRest: (payload: AdhocRestPostPayload) => Promise<any>;
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>;
    runQuery: (payload: SOQLQueryPayload) => Promise<any>;
    sendRetrieve: (payload: RetrievePayload) => Promise<any>;
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>;
    sendDeploy: (payload: DeployPayload) => Promise<any>;
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>;
    updateRecord: (payload: UpdateRecordPayload) => Promise<any>;
    handleError: (error: any) => string;
}

export { AdhocRestPayload, AdhocRestPostPayload, BaseRestPayload, DeployPayload, DeployStatusPayload, DescribeObjectPayload, FieldOption, NameAndMembers, Option, QueryField, QueryRecord, QueryResult, RetrievePayload, RetrieveStatusPayload, SOQLQueryPayload, SObjectDescribeResult, SObjectField, SfdcApi, TestLevel, UpdateRecordPayload };
