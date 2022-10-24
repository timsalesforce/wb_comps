
/**
 * fileAttachments
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface FileAttachments {
    /** xsd:base64Binary */
    body?: string;
    /** xsd:string */
    contentType?: string;
    /** xsd:string */
    fileName?: string;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** xsd:boolean */
    inline?: string;
}
