import { FunctionComponent } from "react";
import { SfdcApi } from '../types';
interface Props {
    api: SfdcApi;
    sid: string;
    apiVersion: string;
    sfdcBaseUrl: string;
}
declare const Workbench: FunctionComponent<Props>;
export default Workbench;
