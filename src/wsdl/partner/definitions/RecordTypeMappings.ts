import { PicklistsForRecordType } from "./PicklistsForRecordType";

/**
 * recordTypeMappings
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface RecordTypeMappings {
    /** xsd:boolean */
    active?: string;
    /** xsd:boolean */
    available?: string;
    /** xsd:boolean */
    defaultRecordTypeMapping?: string;
    /** xsd:string */
    developerName?: string;
    /** ID|xsd:string|length,pattern */
    layoutId?: string;
    /** xsd:boolean */
    master?: string;
    /** xsd:string */
    name?: string;
    /** picklistsForRecordType[] */
    picklistsForRecordType?: Array<PicklistsForRecordType>;
    /** ID|xsd:string|length,pattern */
    recordTypeId?: string;
}
