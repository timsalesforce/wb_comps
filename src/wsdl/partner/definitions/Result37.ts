import { SObjects } from "./Sobjects";
import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result37 {
    /** entity */
    entity?: SObjects;
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:long */
    rowCount?: string;
    /** xsd:boolean */
    success?: string;
}
