import { WholeFields } from "./WholeFields";

/**
 * entityLabelMetadata
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface EntityLabelMetadata {
    /** entityFieldLabels[] */
    entityFieldLabels?: Array<WholeFields>;
    /** xsd:string */
    entityName?: string;
}
