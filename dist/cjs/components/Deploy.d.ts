import { FunctionComponent } from "react";
import { DeployPayload, DeployStatusPayload } from "../types/index";
interface Props {
    setErrorMessage: (message: string) => void;
    setDescribeResponse: (response: any) => void;
    setStatus: (staus?: string) => void;
    setObjectName: (name: string) => void;
    sendDeploy: (payload: DeployPayload) => Promise<any>;
    sendDeployStatus: (payload: DeployStatusPayload) => Promise<any>;
    sid: string;
    soapEndpoint: string;
}
declare const Deploy: FunctionComponent<Props>;
export default Deploy;
