import { FunctionComponent } from "react";
interface Props {
    sid: string;
    sfdcBaseUrl: string;
    signout: () => Promise<any>;
}
declare const WorkbenchHeader: FunctionComponent<Props>;
export default WorkbenchHeader;
