import { DetailButtons } from "./DetailButtons";
import { LayoutItems } from "./LayoutItems";

/**
 * compactLayouts
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface CompactLayouts {
    /** actions[] */
    actions?: Array<DetailButtons>;
    /** fieldItems[] */
    fieldItems?: Array<LayoutItems>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** imageItems[] */
    imageItems?: Array<LayoutItems>;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    objectType?: string;
}
