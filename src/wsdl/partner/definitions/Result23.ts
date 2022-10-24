import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result23 {
    /** errors[] */
    errors?: Array<Errors>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** xsd:boolean */
    success?: string;
}
