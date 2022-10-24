
/**
 * actionOverrides
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface ActionOverrides {
    /** xsd:string */
    formFactor?: string;
    /** xsd:boolean */
    isAvailableInTouch?: string;
    /** xsd:string */
    name?: string;
    /** ID|xsd:string|length,pattern */
    pageId?: string;
    /** xsd:string */
    url?: string;
}
