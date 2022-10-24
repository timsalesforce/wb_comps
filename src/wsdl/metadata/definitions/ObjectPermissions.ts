
/**
 * objectPermissions
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface ObjectPermissions {
    /** xsd:boolean */
    allowCreate?: string;
    /** xsd:boolean */
    allowDelete?: string;
    /** xsd:boolean */
    allowEdit?: string;
    /** xsd:boolean */
    allowRead?: string;
    /** xsd:boolean */
    modifyAllRecords?: string;
    /** xsd:string */
    object?: string;
    /** xsd:boolean */
    viewAllRecords?: string;
}
