import { Errors2 } from "./Errors2";

/**
 * bodyResults
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface BodyResults {
    /** errors[] */
    errors?: Array<Errors2>;
    /** xsd:string */
    mergedBody?: string;
    /** xsd:boolean */
    success?: string;
}
