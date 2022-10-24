
/**
 * childRelationships
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface ChildRelationships {
    /** xsd:boolean */
    cascadeDelete?: string;
    /** xsd:string */
    childSObject?: string;
    /** xsd:boolean */
    deprecatedAndHidden?: string;
    /** xsd:string */
    field?: string;
    /** xsd:string */
    junctionIdListNames?: Array<string>;
    /** xsd:string */
    junctionReferenceTo?: Array<string>;
    /** xsd:string */
    relationshipName?: string;
    /** xsd:boolean */
    restrictedDelete?: string;
}
