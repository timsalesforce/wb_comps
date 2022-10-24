import { BodyResults } from "./BodyResults";
import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result39 {
    /** bodyResults[] */
    bodyResults?: Array<BodyResults>;
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:boolean */
    success?: string;
}
