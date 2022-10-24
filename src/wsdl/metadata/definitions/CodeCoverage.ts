import { DmlInfo } from "./DmlInfo";

/**
 * codeCoverage
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface CodeCoverage {
    /** dmlInfo[] */
    dmlInfo?: Array<DmlInfo>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** locationsNotCovered[] */
    locationsNotCovered?: Array<DmlInfo>;
    /** methodInfo[] */
    methodInfo?: Array<DmlInfo>;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    namespace?: string;
    /** xsd:int */
    numLocations?: string;
    /** xsd:int */
    numLocationsNotCovered?: string;
    /** soqlInfo[] */
    soqlInfo?: Array<DmlInfo>;
    /** soslInfo[] */
    soslInfo?: Array<DmlInfo>;
    /** xsd:string */
    type?: string;
}
