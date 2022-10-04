import { FunctionComponent } from "react";
import { AdhocRestPayload, DescribeObjectPayload, SObjectDescribeResult, UpdateRecordPayload } from "../types";
interface Props {
    setDescribeResponse: (obj?: object) => void;
    setErrorMessage: (msg: string) => void;
    apiVersion: string;
    sfdcBaseUrl: string;
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>;
    sendRest: (payload: AdhocRestPayload) => Promise<any>;
    updateRecord: (payload: UpdateRecordPayload) => Promise<any>;
}
declare const RecordEditor: FunctionComponent<Props>;
export default RecordEditor;
