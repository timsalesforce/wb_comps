import { SObjects } from "./Sobjects";

/**
 * quickActions
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface QuickActions {
    /** ID|xsd:string|length,pattern */
    contextId?: string;
    /** xsd:string */
    quickActionName?: string;
    /** records[] */
    records?: Array<SObjects>;
}
