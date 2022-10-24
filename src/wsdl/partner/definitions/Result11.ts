import { SearchColumns } from "./SearchColumns";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result11 {
    /** xsd:string */
    errorMsg?: string;
    /** xsd:string */
    label?: string;
    /** xsd:int */
    limitRows?: string;
    /** xsd:string */
    objectType?: string;
    /** searchColumns[] */
    searchColumns?: Array<SearchColumns>;
}
