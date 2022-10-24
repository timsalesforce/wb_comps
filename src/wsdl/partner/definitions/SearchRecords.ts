import { SObjects } from "./Sobjects";
import { SearchRecordMetadata } from "./SearchRecordMetadata";
import { Snippet } from "./Snippet";

/**
 * searchRecords
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface SearchRecords {
    /** record */
    record?: SObjects;
    /** searchRecordMetadata */
    searchRecordMetadata?: SearchRecordMetadata;
    /** snippet */
    snippet?: Snippet;
}
