
/**
 * feedFilters
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface FeedFilters {
    /** xsd:string */
    label?: string;
    /** xsd:string */
    name?: string;
    /** FeedLayoutFilterType|xsd:string|AllUpdates,FeedItemType,Custom */
    type?: string;
}
