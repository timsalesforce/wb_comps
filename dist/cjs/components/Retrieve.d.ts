import { FunctionComponent } from "react";
import { RetrievePayload, RetrieveStatusPayload } from "../types";
interface Props {
    setErrorMessage: (message: string) => void;
    setDescribeResponse: (response: any) => void;
    setObjectName: (name: string) => void;
    setStatus: (staus?: string) => void;
    sendRetrieve: (payload: RetrievePayload) => Promise<any>;
    sendRetrieveStatus: (payload: RetrieveStatusPayload) => Promise<any>;
    soapEndpoint: string;
    sid: string;
    apiVersion: string;
}
declare const Retrieve: FunctionComponent<Props>;
export default Retrieve;
