import { SObjects } from "./Sobjects";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result31 {
    /** xsd:boolean */
    done?: string;
    /** QueryLocator|xsd:string */
    queryLocator?: string;
    /** records[] */
    records?: Array<SObjects>;
    /** xsd:int */
    size?: string;
}
