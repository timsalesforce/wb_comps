import { Fields1 } from "./Fields1";
import { DetailLayoutSections } from "./DetailLayoutSections";

/**
 * steps
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Steps {
    /** xsd:boolean */
    closed?: string;
    /** xsd:boolean */
    converted?: string;
    /** fields[] */
    fields?: Array<Fields1>;
    /** xsd:string */
    info?: string;
    /** layoutSection */
    layoutSection?: DetailLayoutSections;
    /** xsd:string */
    picklistLabel?: string;
    /** xsd:string */
    picklistValue?: string;
    /** xsd:boolean */
    won?: string;
}
