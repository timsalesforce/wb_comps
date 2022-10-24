import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result22 {
    /** errors[] */
    errors?: Array<Errors>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** ID|xsd:string|length,pattern */
    mergedRecordIds?: Array<string>;
    /** xsd:boolean */
    success?: string;
    /** ID|xsd:string|length,pattern */
    updatedRelatedIds?: Array<string>;
}
