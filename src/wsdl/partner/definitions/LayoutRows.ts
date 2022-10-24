import { LayoutItems } from "./LayoutItems";

/**
 * layoutRows
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface LayoutRows {
    /** layoutItems[] */
    layoutItems?: Array<LayoutItems>;
    /** xsd:int */
    numItems?: string;
}
