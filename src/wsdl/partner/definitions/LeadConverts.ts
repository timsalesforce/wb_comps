import { SObjects } from "./Sobjects";

/**
 * leadConverts
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface LeadConverts {
    /** ID|xsd:string|length,pattern */
    accountId?: string;
    /** accountRecord */
    accountRecord?: SObjects;
    /** xsd:boolean */
    bypassAccountDedupeCheck?: string;
    /** xsd:boolean */
    bypassContactDedupeCheck?: string;
    /** ID|xsd:string|length,pattern */
    contactId?: string;
    /** contactRecord */
    contactRecord?: SObjects;
    /** xsd:string */
    convertedStatus?: string;
    /** xsd:boolean */
    doNotCreateOpportunity?: string;
    /** ID|xsd:string|length,pattern */
    leadId?: string;
    /** ID|xsd:string|length,pattern */
    opportunityId?: string;
    /** xsd:string */
    opportunityName?: string;
    /** opportunityRecord */
    opportunityRecord?: SObjects;
    /** xsd:boolean */
    overwriteLeadSource?: string;
    /** ID|xsd:string|length,pattern */
    ownerId?: string;
    /** ID|xsd:string|length,pattern */
    relatedPersonAccountId?: string;
    /** relatedPersonAccountRecord */
    relatedPersonAccountRecord?: SObjects;
    /** xsd:boolean */
    sendNotificationEmail?: string;
}
