
/**
 * topCategories
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface TopCategories {
    /** childCategories[] */
    childCategories?: Array<TopCategories>;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    name?: string;
}
