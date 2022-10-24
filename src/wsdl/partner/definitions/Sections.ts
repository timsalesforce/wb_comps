import { Items } from "./Items";

/**
 * sections
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Sections {
    /** xsd:string */
    entityApiName?: string;
    /** items[] */
    items?: Array<Items>;
}
