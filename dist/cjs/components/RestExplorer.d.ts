import { FunctionComponent } from "react";
import { AdhocRestPayload, AdhocRestPostPayload } from "../types";
interface Props {
    setErrorMessage: (msg: string) => void;
    setDescribeResponse: (res: object) => void;
    apiVersion: string;
    sfdcBaseUrl: string;
    handleError: (message: string) => string;
    sendRest: (payload: AdhocRestPayload) => Promise<any>;
    postRest: (payload: AdhocRestPostPayload) => Promise<any>;
}
declare const RestExplorer: FunctionComponent<Props>;
export default RestExplorer;
