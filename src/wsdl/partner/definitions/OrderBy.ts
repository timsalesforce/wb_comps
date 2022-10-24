
/**
 * orderBy
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface OrderBy {
    /** xsd:string */
    fieldNameOrPath?: string;
    /** orderByNullsPosition|xsd:string|first,last */
    nullsPosition?: string;
    /** orderByDirection|xsd:string|ascending,descending */
    sortDirection?: string;
}
