
/**
 * fieldDiffs
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface FieldDiffs {
    /** differenceType|xsd:string|DIFFERENT,NULL,SAME,SIMILAR */
    difference?: string;
    /** xsd:string */
    name?: string;
}
