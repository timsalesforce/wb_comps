import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface Result2 {
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:string */
    fullName?: string;
    /** xsd:boolean */
    success?: string;
}
