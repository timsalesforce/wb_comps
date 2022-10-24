import { PicklistValues } from "./PicklistValues";

/**
 * parentField
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface ParentField {
    /** fields[] */
    fields?: Array<ParentField>;
    /** xsd:string */
    foreignKeyDomain?: Array<string>;
    /** xsd:boolean */
    isForeignKey?: string;
    /** xsd:boolean */
    isNameField?: string;
    /** xsd:int */
    minOccurs?: string;
    /** xsd:string */
    name?: string;
    /** picklistValues[] */
    picklistValues?: Array<PicklistValues>;
    /** xsd:string */
    soapType?: string;
    /** xsd:boolean */
    valueRequired?: string;
}
