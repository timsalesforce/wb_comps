import { CodeCoverage } from "./CodeCoverage";
import { CodeCoverageWarnings } from "./CodeCoverageWarnings";
import { Failures } from "./Failures";
import { FlowCoverage } from "./FlowCoverage";
import { FlowCoverageWarnings } from "./FlowCoverageWarnings";
import { Successes } from "./Successes";

/**
 * runTestResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface RunTestResult {
    /** xsd:string */
    apexLogId?: string;
    /** codeCoverage[] */
    codeCoverage?: Array<CodeCoverage>;
    /** codeCoverageWarnings[] */
    codeCoverageWarnings?: Array<CodeCoverageWarnings>;
    /** failures[] */
    failures?: Array<Failures>;
    /** flowCoverage[] */
    flowCoverage?: Array<FlowCoverage>;
    /** flowCoverageWarnings[] */
    flowCoverageWarnings?: Array<FlowCoverageWarnings>;
    /** xsd:int */
    numFailures?: string;
    /** xsd:int */
    numTestsRun?: string;
    /** successes[] */
    successes?: Array<Successes>;
    /** xsd:double */
    totalTime?: string;
}
