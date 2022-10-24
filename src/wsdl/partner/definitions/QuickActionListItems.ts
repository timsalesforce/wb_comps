import { Colors } from "./Colors";
import { Icons } from "./Icons";

/**
 * quickActionListItems
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface QuickActionListItems {
    /** ShareAccessLevel|xsd:string|Read,Edit,All */
    accessLevelRequired?: string;
    /** colors[] */
    colors?: Array<Colors>;
    /** xsd:string */
    iconUrl?: string;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    miniIconUrl?: string;
    /** xsd:string */
    quickActionName?: string;
    /** xsd:string */
    targetSobjectType?: string;
    /** xsd:string */
    type?: string;
}
