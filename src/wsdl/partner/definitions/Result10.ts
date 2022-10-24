import { CallTypes } from "./CallTypes";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result10 {
    /** callTypes[] */
    callTypes?: Array<CallTypes>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** xsd:string */
    name?: string;
}
