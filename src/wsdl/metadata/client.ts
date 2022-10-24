import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { CancelDeploy } from "./definitions/CancelDeploy";
import { CancelDeployResponse } from "./definitions/CancelDeployResponse";
import { CheckDeployStatus } from "./definitions/CheckDeployStatus";
import { CheckDeployStatusResponse } from "./definitions/CheckDeployStatusResponse";
import { CheckRetrieveStatus } from "./definitions/CheckRetrieveStatus";
import { CheckRetrieveStatusResponse } from "./definitions/CheckRetrieveStatusResponse";
import { CreateMetadata } from "./definitions/CreateMetadata";
import { CreateMetadataResponse } from "./definitions/CreateMetadataResponse";
import { DeleteMetadata } from "./definitions/DeleteMetadata";
import { DeleteMetadataResponse } from "./definitions/DeleteMetadataResponse";
import { Deploy } from "./definitions/Deploy";
import { DeployResponse } from "./definitions/DeployResponse";
import { DeployRecentValidation } from "./definitions/DeployRecentValidation";
import { DeployRecentValidationResponse } from "./definitions/DeployRecentValidationResponse";
import { DescribeMetadata } from "./definitions/DescribeMetadata";
import { DescribeMetadataResponse } from "./definitions/DescribeMetadataResponse";
import { DescribeValueType } from "./definitions/DescribeValueType";
import { DescribeValueTypeResponse } from "./definitions/DescribeValueTypeResponse";
import { ListMetadata } from "./definitions/ListMetadata";
import { ListMetadataResponse } from "./definitions/ListMetadataResponse";
import { ReadMetadata } from "./definitions/ReadMetadata";
import { ReadMetadataResponse } from "./definitions/ReadMetadataResponse";
import { RenameMetadata } from "./definitions/RenameMetadata";
import { RenameMetadataResponse } from "./definitions/RenameMetadataResponse";
import { Retrieve } from "./definitions/Retrieve";
import { RetrieveResponse } from "./definitions/RetrieveResponse";
import { UpdateMetadata } from "./definitions/UpdateMetadata";
import { UpdateMetadataResponse } from "./definitions/UpdateMetadataResponse";
import { UpsertMetadata } from "./definitions/UpsertMetadata";
import { UpsertMetadataResponse } from "./definitions/UpsertMetadataResponse";
import { MetadataService } from "./services/MetadataService";

export interface MetadataClient extends SoapClient {
    MetadataService: MetadataService;
    cancelDeployAsync(cancelDeploy: CancelDeploy): Promise<[result: CancelDeployResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    checkDeployStatusAsync(checkDeployStatus: CheckDeployStatus): Promise<[result: CheckDeployStatusResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    checkRetrieveStatusAsync(checkRetrieveStatus: CheckRetrieveStatus): Promise<[result: CheckRetrieveStatusResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    createMetadataAsync(createMetadata: CreateMetadata): Promise<[result: CreateMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    deleteMetadataAsync(deleteMetadata: DeleteMetadata): Promise<[result: DeleteMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    deployAsync(deploy: Deploy): Promise<[result: DeployResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    deployRecentValidationAsync(deployRecentValidation: DeployRecentValidation): Promise<[result: DeployRecentValidationResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    describeMetadataAsync(describeMetadata: DescribeMetadata): Promise<[result: DescribeMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    describeValueTypeAsync(describeValueType: DescribeValueType): Promise<[result: DescribeValueTypeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    listMetadataAsync(listMetadata: ListMetadata): Promise<[result: ListMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    readMetadataAsync(readMetadata: ReadMetadata): Promise<[result: ReadMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    renameMetadataAsync(renameMetadata: RenameMetadata): Promise<[result: RenameMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    retrieveAsync(retrieve: Retrieve): Promise<[result: RetrieveResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    updateMetadataAsync(updateMetadata: UpdateMetadata): Promise<[result: UpdateMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    upsertMetadataAsync(upsertMetadata: UpsertMetadata): Promise<[result: UpsertMetadataResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create MetadataClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<MetadataClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
