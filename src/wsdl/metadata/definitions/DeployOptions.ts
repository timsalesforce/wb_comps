
/**
 * DeployOptions
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface DeployOptions {
    /** xsd:boolean */
    allowMissingFiles?: string;
    /** xsd:boolean */
    autoUpdatePackage?: string;
    /** xsd:boolean */
    checkOnly?: string;
    /** xsd:boolean */
    ignoreWarnings?: string;
    /** xsd:boolean */
    performRetrieve?: string;
    /** xsd:boolean */
    purgeOnDelete?: string;
    /** xsd:boolean */
    rollbackOnError?: string;
    /** xsd:string */
    runTests?: Array<string>;
    /** xsd:boolean */
    singlePackage?: string;
    /** TestLevel|xsd:string|NoTestRun,RunSpecifiedTests,RunLocalTests,RunAllTestsInOrg */
    testLevel?: string;
}
