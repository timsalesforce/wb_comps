import { LayoutRows } from "./LayoutRows";

/**
 * detailLayoutSections
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface DetailLayoutSections {
    /** xsd:boolean */
    collapsed?: string;
    /** xsd:int */
    columns?: string;
    /** xsd:string */
    heading?: string;
    /** layoutRows[] */
    layoutRows?: Array<LayoutRows>;
    /** ID|xsd:string|length,pattern */
    layoutSectionId?: string;
    /** ID|xsd:string|length,pattern */
    parentLayoutId?: string;
    /** xsd:int */
    rows?: string;
    /** TabOrderType|xsd:string|LeftToRight,TopToBottom */
    tabOrder?: string;
    /** xsd:boolean */
    useCollapsibleSection?: string;
    /** xsd:boolean */
    useHeading?: string;
}
