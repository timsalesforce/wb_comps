import { ParentField } from "./ParentField";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface Result6 {
    /** xsd:boolean */
    apiCreatable?: string;
    /** xsd:boolean */
    apiDeletable?: string;
    /** xsd:boolean */
    apiReadable?: string;
    /** xsd:boolean */
    apiUpdatable?: string;
    /** parentField */
    parentField?: ParentField;
    /** valueTypeFields[] */
    valueTypeFields?: Array<ParentField>;
}
