import { AdditionalInformationMap } from "./AdditionalInformationMap";
import { SObjects } from "./Sobjects";

/**
 * request
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Request2 {
    /** additionalInformationMap[] */
    additionalInformationMap?: Array<AdditionalInformationMap>;
    /** masterRecord */
    masterRecord?: SObjects;
    /** ID|xsd:string|length,pattern */
    recordToMergeIds?: Array<string>;
}
