
/**
 * fileProperties
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface FileProperties {
    /** xsd:string */
    createdById?: string;
    /** xsd:string */
    createdByName?: string;
    /** xsd:dateTime */
    createdDate?: string;
    /** xsd:string */
    fileName?: string;
    /** xsd:string */
    fullName?: string;
    /** xsd:string */
    id?: string;
    /** xsd:string */
    lastModifiedById?: string;
    /** xsd:string */
    lastModifiedByName?: string;
    /** xsd:dateTime */
    lastModifiedDate?: string;
    /** ManageableState|xsd:string|released,deleted,deprecated,installed,beta,unmanaged,installedEditable,deprecatedEditable */
    manageableState?: string;
    /** xsd:string */
    namespacePrefix?: string;
    /** xsd:string */
    type?: string;
}
