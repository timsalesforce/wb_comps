import { MetadataObjects } from "./MetadataObjects";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface Result5 {
    /** metadataObjects[] */
    metadataObjects?: Array<MetadataObjects>;
    /** xsd:string */
    organizationNamespace?: string;
    /** xsd:boolean */
    partialSaveAllowed?: string;
    /** xsd:boolean */
    testRequired?: string;
}
