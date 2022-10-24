import { Colors } from "./Colors";
import { Icons } from "./Icons";

/**
 * tabs
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Tabs {
    /** colors[] */
    colors?: Array<Colors>;
    /** xsd:boolean */
    custom?: string;
    /** xsd:string */
    iconUrl?: string;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    miniIconUrl?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    sobjectName?: string;
    /** xsd:string */
    url?: string;
}
