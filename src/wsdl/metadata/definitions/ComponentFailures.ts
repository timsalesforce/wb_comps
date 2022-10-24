
/**
 * componentFailures
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface ComponentFailures {
    /** xsd:boolean */
    changed?: string;
    /** xsd:int */
    columnNumber?: string;
    /** xsd:string */
    componentType?: string;
    /** xsd:boolean */
    created?: string;
    /** xsd:dateTime */
    createdDate?: string;
    /** xsd:boolean */
    deleted?: string;
    /** xsd:string */
    fileName?: string;
    /** xsd:string */
    fullName?: string;
    /** xsd:string */
    id?: string;
    /** xsd:int */
    lineNumber?: string;
    /** xsd:string */
    problem?: string;
    /** DeployProblemType|xsd:string|Warning,Error,Info */
    problemType?: string;
    /** xsd:boolean */
    success?: string;
}
