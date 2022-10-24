import { SearchRecords } from "./SearchRecords";
import { SearchResultsMetadata } from "./SearchResultsMetadata";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result32 {
    /** xsd:string */
    queryId?: string;
    /** searchRecords[] */
    searchRecords?: Array<SearchRecords>;
    /** searchResultsMetadata */
    searchResultsMetadata?: SearchResultsMetadata;
}
