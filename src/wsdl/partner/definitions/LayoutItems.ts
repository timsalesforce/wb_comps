import { LayoutComponents } from "./LayoutComponents";

/**
 * layoutItems
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface LayoutItems {
    /** xsd:boolean */
    editableForNew?: string;
    /** xsd:boolean */
    editableForUpdate?: string;
    /** xsd:string */
    label?: string;
    /** layoutComponents[] */
    layoutComponents?: Array<LayoutComponents>;
    /** xsd:boolean */
    placeholder?: string;
    /** xsd:boolean */
    required?: string;
}
