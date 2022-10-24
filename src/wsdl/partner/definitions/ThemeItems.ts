import { Colors } from "./Colors";
import { Icons } from "./Icons";

/**
 * themeItems
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface ThemeItems {
    /** colors[] */
    colors?: Array<Colors>;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    name?: string;
}
