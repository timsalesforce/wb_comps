import { SObjects } from "./Sobjects";
import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result44 {
    /** xsd:string */
    contextId?: string;
    /** defaultValueFormulas */
    defaultValueFormulas?: SObjects;
    /** defaultValues */
    defaultValues?: SObjects;
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:boolean */
    success?: string;
}
