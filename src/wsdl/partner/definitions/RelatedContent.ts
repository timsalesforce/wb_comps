import { RelatedContentItems } from "./RelatedContentItems";

/**
 * relatedContent
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface RelatedContent {
    /** relatedContentItems[] */
    relatedContentItems?: Array<RelatedContentItems>;
}
