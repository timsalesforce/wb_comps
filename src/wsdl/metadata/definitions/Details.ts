import { ComponentFailures } from "./ComponentFailures";
import { RetrieveResult } from "./RetrieveResult";
import { RunTestResult } from "./RunTestResult";

/**
 * details
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface Details {
    /** componentFailures[] */
    componentFailures?: Array<ComponentFailures>;
    /** componentSuccesses[] */
    componentSuccesses?: Array<ComponentFailures>;
    /** retrieveResult */
    retrieveResult?: RetrieveResult;
    /** runTestResult */
    runTestResult?: RunTestResult;
}
