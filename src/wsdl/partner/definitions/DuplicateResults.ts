import { MatchResults } from "./MatchResults";

/**
 * duplicateResults
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface DuplicateResults {
    /** xsd:boolean */
    allowSave?: string;
    /** xsd:string */
    duplicateRule?: string;
    /** xsd:string */
    duplicateRuleEntityType?: string;
    /** xsd:string */
    errorMessage?: string;
    /** matchResults[] */
    matchResults?: Array<MatchResults>;
}
