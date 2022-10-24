import { DeletedRecords } from "./DeletedRecords";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result29 {
    /** deletedRecords[] */
    deletedRecords?: Array<DeletedRecords>;
    /** xsd:dateTime */
    earliestDateAvailable?: string;
    /** xsd:dateTime */
    latestDateCovered?: string;
}
