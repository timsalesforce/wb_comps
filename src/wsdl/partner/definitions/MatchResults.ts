import { Errors } from "./Errors";
import { MatchRecords } from "./MatchRecords";

/**
 * matchResults
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface MatchResults {
    /** xsd:string */
    entityType?: string;
    /** errors[] */
    errors?: Array<Errors>;
    /** xsd:string */
    matchEngine?: string;
    /** matchRecords[] */
    matchRecords?: Array<MatchRecords>;
    /** xsd:string */
    rule?: string;
    /** xsd:int */
    size?: string;
    /** xsd:boolean */
    success?: string;
}
