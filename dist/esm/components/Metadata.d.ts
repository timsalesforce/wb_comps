import { FunctionComponent } from "react";
import { DeployPayload, DeployStatusPayload, RetrievePayload, RetrieveStatusPayload } from "../types";
interface Props {
    setErrorMessage: (message: string) => void;
    setDescribeResponse: (response: any) => void;
    setObjectName: (name: string) => void;
    sid: string;
    soapEndpoint: string;
    apiVersion: string;
    sendDeploy: (payload: DeployPayload) => Promise<any>;
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>;
    sendRetrieve: (payload: RetrievePayload) => Promise<any>;
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>;
}
declare const Metadata: FunctionComponent<Props>;
export default Metadata;
