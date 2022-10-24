
/**
 * renderRequests
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface RenderRequests {
    /** xsd:boolean */
    escapeHtmlInMergeFields?: string;
    /** xsd:string */
    templateBodies?: Array<string>;
    /** ID|xsd:string|length,pattern */
    whatId?: string;
    /** ID|xsd:string|length,pattern */
    whoId?: string;
}
