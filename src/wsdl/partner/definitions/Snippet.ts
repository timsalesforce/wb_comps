import { WholeFields } from "./WholeFields";

/**
 * snippet
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Snippet {
    /** xsd:string */
    text?: string;
    /** wholeFields[] */
    wholeFields?: Array<WholeFields>;
}
