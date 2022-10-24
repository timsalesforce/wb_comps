import { AdditionalInformationMap } from "./AdditionalInformationMap";
import { FieldDiffs } from "./FieldDiffs";
import { SObjects } from "./Sobjects";

/**
 * matchRecords
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface MatchRecords {
    /** additionalInformation[] */
    additionalInformation?: Array<AdditionalInformationMap>;
    /** fieldDiffs[] */
    fieldDiffs?: Array<FieldDiffs>;
    /** xsd:double */
    matchConfidence?: string;
    /** record */
    record?: SObjects;
}
