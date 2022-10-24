import { Unpackaged } from "./Unpackaged";

/**
 * retrieveRequest
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface RetrieveRequest {
    /** xsd:double */
    apiVersion?: string;
    /** xsd:string */
    packageNames?: Array<string>;
    /** xsd:boolean */
    singlePackage?: string;
    /** xsd:string */
    specificFiles?: Array<string>;
    /** unpackaged */
    unpackaged?: Unpackaged;
}
