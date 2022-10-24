
/**
 * messages
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Messages {
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
}
