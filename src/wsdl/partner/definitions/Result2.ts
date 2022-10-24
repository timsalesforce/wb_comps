import { SObjects } from "./Sobjects";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result2 {
    /** xsd:string */
    encoding?: string;
    /** xsd:int */
    maxBatchSize?: string;
    /** sobjects[] */
    sobjects?: Array<SObjects>;
}
