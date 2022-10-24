
/**
 * animationRule
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface AnimationRule {
    /** xsd:string */
    animationFrequency?: string;
    /** xsd:boolean */
    isActive?: string;
    /** xsd:string */
    recordTypeContext?: string;
    /** xsd:string */
    recordTypeId?: string;
    /** xsd:string */
    targetField?: string;
    /** xsd:string */
    targetFieldChangeToValues?: string;
}
