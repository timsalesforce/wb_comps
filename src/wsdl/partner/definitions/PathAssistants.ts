import { AnimationRule } from "./AnimationRule";
import { PicklistsForRecordType } from "./PicklistsForRecordType";
import { Steps } from "./Steps";

/**
 * pathAssistants
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface PathAssistants {
    /** xsd:boolean */
    active?: string;
    /** animationRule[] */
    animationRule?: Array<AnimationRule>;
    /** xsd:string */
    apiName?: string;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    pathPicklistField?: string;
    /** picklistsForRecordType[] */
    picklistsForRecordType?: Array<PicklistsForRecordType>;
    /** ID|xsd:string|length,pattern */
    recordTypeId?: string;
    /** steps[] */
    steps?: Array<Steps>;
}
