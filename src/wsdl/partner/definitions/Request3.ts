
/**
 * request
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Request3 {
    /** AttachmentRetrievalOption|xsd:string|None,MetadataOnly,MetadataWithBody */
    attachmentRetrievalOption?: string;
    /** ID|xsd:string|length,pattern */
    templateId?: string;
    /** xsd:boolean */
    updateTemplateUsage?: string;
    /** ID|xsd:string|length,pattern */
    whatId?: string;
    /** ID|xsd:string|length,pattern */
    whoId?: string;
}
