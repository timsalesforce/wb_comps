import { LayoutItems } from "./LayoutItems";

/**
 * approvalLayouts
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface ApprovalLayouts {
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** xsd:string */
    label?: string;
    /** layoutItems[] */
    layoutItems?: Array<LayoutItems>;
    /** xsd:string */
    name?: string;
}
