import { TopCategories } from "./TopCategories";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result4 {
    /** xsd:string */
    description?: string;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    sobject?: string;
    /** topCategories[] */
    topCategories?: Array<TopCategories>;
}
