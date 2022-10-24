import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result41 {
    /** ID|xsd:string|length,pattern */
    contextId?: string;
    /** xsd:boolean */
    created?: string;
    /** errors[] */
    errors?: Array<Errors>;
    /** ID|xsd:string|length,pattern */
    feedItemIds?: Array<string>;
    /** ID|xsd:string|length,pattern */
    ids?: Array<string>;
    /** xsd:boolean */
    success?: string;
    /** xsd:string */
    successMessage?: string;
}
