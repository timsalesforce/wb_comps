import { EntityLabelMetadata } from "./EntityLabelMetadata";
import { EntityMetadata } from "./EntityMetadata";

/**
 * searchResultsMetadata
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface SearchResultsMetadata {
    /** entityLabelMetadata[] */
    entityLabelMetadata?: Array<EntityLabelMetadata>;
    /** entityMetadata[] */
    entityMetadata?: Array<EntityMetadata>;
}
