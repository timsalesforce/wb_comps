import { PicklistValues } from "./PicklistValues";

/**
 * picklistsForRecordType
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface PicklistsForRecordType {
    /** xsd:string */
    picklistName?: string;
    /** picklistValues[] */
    picklistValues?: Array<PicklistValues>;
}
