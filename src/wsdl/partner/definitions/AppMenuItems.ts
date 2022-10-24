import { Colors } from "./Colors";
import { Icons } from "./Icons";

/**
 * appMenuItems
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface AppMenuItems {
    /** colors[] */
    colors?: Array<Colors>;
    /** xsd:string */
    content?: string;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    type?: string;
    /** xsd:string */
    url?: string;
}
