import { Languages } from "./Languages";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result6 {
    /** xsd:string */
    defaultLanguage?: string;
    /** xsd:boolean */
    knowledgeEnabled?: string;
    /** languages[] */
    languages?: Array<Languages>;
}
