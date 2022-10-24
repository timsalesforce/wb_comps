
/**
 * caseValues
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface CaseValues {
    /** Article|xsd:string|None,Indefinite,Definite */
    article?: string;
    /** CaseType|xsd:string|Nominative,Accusative,Genitive,Dative,Inessive,Elative,Illative,Adessive,Ablative,Allative,Essive,Translative,Partitive,Objective,Subjective,Instrumental,Prepositional,Locative,Vocative,Sublative,Superessive,Delative,Causalfinal,Essiveformal,Termanative,Distributive,Ergative,Adverbial,Abessive,Comitative */
    caseType?: string;
    /** GrammaticalNumber|xsd:string|Singular,Plural,Dual */
    number?: string;
    /** Possessive|xsd:string|None,First,Second */
    possessive?: string;
    /** xsd:string */
    value?: string;
}
