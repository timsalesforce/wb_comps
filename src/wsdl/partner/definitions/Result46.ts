import { DuplicateResults } from "./DuplicateResults";
import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result46 {
    /** duplicateResults[] */
    duplicateResults?: Array<DuplicateResults>;
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:boolean */
    success?: string;
}
