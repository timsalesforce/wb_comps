import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result27 {
    /** ID|xsd:string|length,pattern */
    accountId?: string;
    /** ID|xsd:string|length,pattern */
    contactId?: string;
    /** errors[] */
    errors?: Array<Errors>;
    /** ID|xsd:string|length,pattern */
    leadId?: string;
    /** ID|xsd:string|length,pattern */
    opportunityId?: string;
    /** ID|xsd:string|length,pattern */
    relatedPersonAccountId?: string;
    /** xsd:boolean */
    success?: string;
}
