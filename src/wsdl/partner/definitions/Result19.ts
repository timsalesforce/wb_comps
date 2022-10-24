import { Tabs } from "./Tabs";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result19 {
    /** xsd:string */
    description?: string;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    logoUrl?: string;
    /** xsd:string */
    namespace?: string;
    /** xsd:boolean */
    selected?: string;
    /** xsd:string */
    tabSetId?: string;
    /** tabs[] */
    tabs?: Array<Tabs>;
}
