import { CaseValues } from "./CaseValues";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result47 {
    /** caseValues[] */
    caseValues?: Array<CaseValues>;
    /** xsd:string */
    developerName?: string;
    /** Gender|xsd:string|Neuter,Masculine,Feminine,AnimateMasculine,ClassI,ClassIII,ClassV,ClassVII,ClassIX,ClassXI,ClassXIV,ClassXV,ClassXVI,ClassXVII,ClassXVIII */
    gender?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    pluralAlias?: string;
    /** StartsWith|xsd:string|Consonant,Vowel,Special */
    startsWith?: string;
}
