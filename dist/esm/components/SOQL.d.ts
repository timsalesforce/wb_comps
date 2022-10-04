import { FunctionComponent } from "react";
import { DescribeObjectPayload, SObjectDescribeResult, SOQLQueryPayload } from '../types';
interface Props {
    setErrorMessage: (message: string) => void;
    fetchObjects: () => void;
    objects: string[];
    sid: string;
    apiVersion: string;
    sfdcBaseUrl: string;
    describeObject: (payload: DescribeObjectPayload) => Promise<SObjectDescribeResult>;
    handleError: (message: string) => string;
    runQuery: (payload: SOQLQueryPayload) => Promise<any>;
}
declare const SOQL: FunctionComponent<Props>;
export default SOQL;
