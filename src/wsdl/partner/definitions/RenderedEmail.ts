import { FileAttachments } from "./FileAttachments";

/**
 * renderedEmail
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface RenderedEmail {
    /** xsd:boolean */
    bccSender?: string;
    /** EmailPriority|xsd:string|Highest,High,Normal,Low,Lowest */
    emailPriority?: string;
    /** xsd:string */
    replyTo?: string;
    /** xsd:boolean */
    saveAsActivity?: string;
    /** xsd:string */
    senderDisplayName?: string;
    /** xsd:string */
    subject?: string;
    /** xsd:boolean */
    useSignature?: string;
    /** xsd:string */
    bccAddresses?: Array<string>;
    /** xsd:string */
    ccAddresses?: Array<string>;
    /** xsd:string */
    charset?: string;
    /** ID|xsd:string|length,pattern */
    documentAttachments?: Array<string>;
    /** ID|xsd:string|length,pattern */
    entityAttachments?: Array<string>;
    /** fileAttachments[] */
    fileAttachments?: Array<FileAttachments>;
    /** xsd:string */
    htmlBody?: string;
    /** xsd:string */
    inReplyTo?: string;
    /** SendEmailOptOutPolicy|xsd:string|SEND,FILTER,REJECT */
    optOutPolicy?: string;
    /** ID|xsd:string|length,pattern */
    orgWideEmailAddressId?: string;
    /** xsd:string */
    plainTextBody?: string;
    /** xsd:string */
    references?: string;
    /** ID|xsd:string|length,pattern */
    targetObjectId?: string;
    /** ID|xsd:string|length,pattern */
    templateId?: string;
    /** xsd:string */
    templateName?: string;
    /** xsd:string */
    toAddresses?: Array<string>;
    /** xsd:boolean */
    treatBodiesAsTemplate?: string;
    /** xsd:boolean */
    treatTargetObjectAsRecipient?: string;
    /** ID|xsd:string|length,pattern */
    whatId?: string;
}
