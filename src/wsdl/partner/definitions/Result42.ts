import { Colors } from "./Colors";
import { DefaultValues } from "./DefaultValues";
import { Icons } from "./Icons";
import { DetailLayoutSections } from "./DetailLayoutSections";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result42 {
    /** ShareAccessLevel|xsd:string|Read,Edit,All */
    accessLevelRequired?: string;
    /** xsd:string */
    actionEnumOrId?: string;
    /** ID|xsd:string|length,pattern */
    canvasApplicationId?: string;
    /** xsd:string */
    canvasApplicationName?: string;
    /** colors[] */
    colors?: Array<Colors>;
    /** xsd:string */
    contextSobjectType?: string;
    /** defaultValues[] */
    defaultValues?: Array<DefaultValues>;
    /** xsd:string */
    flowDevName?: string;
    /** xsd:string */
    flowRecordIdVar?: string;
    /** xsd:int */
    height?: string;
    /** xsd:string */
    iconName?: string;
    /** xsd:string */
    iconUrl?: string;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    label?: string;
    /** layout */
    layout?: DetailLayoutSections;
    /** ID|xsd:string|length,pattern */
    lightningComponentBundleId?: string;
    /** xsd:string */
    lightningComponentBundleName?: string;
    /** xsd:string */
    lightningComponentQualifiedName?: string;
    /** ID|xsd:string|length,pattern */
    lightningWebComponentBundleId?: string;
    /** xsd:string */
    lightningWebComponentBundleName?: string;
    /** xsd:string */
    lightningWebComponentQualifiedName?: string;
    /** xsd:string */
    miniIconUrl?: string;
    /** xsd:string */
    mobileExtensionId?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    showQuickActionLcHeader?: string;
    /** xsd:boolean */
    showQuickActionVfHeader?: string;
    /** xsd:string */
    targetParentField?: string;
    /** ID|xsd:string|length,pattern */
    targetRecordTypeId?: string;
    /** xsd:string */
    targetSobjectType?: string;
    /** xsd:string */
    type?: string;
    /** xsd:string */
    visualforcePageName?: string;
    /** xsd:string */
    visualforcePageUrl?: string;
    /** xsd:int */
    width?: string;
}
