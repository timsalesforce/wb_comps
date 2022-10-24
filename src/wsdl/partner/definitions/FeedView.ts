import { FeedFilters } from "./FeedFilters";

/**
 * feedView
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface FeedView {
    /** feedFilters[] */
    feedFilters?: Array<FeedFilters>;
}
