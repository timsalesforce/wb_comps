import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result28 {
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:boolean */
    success?: string;
}
