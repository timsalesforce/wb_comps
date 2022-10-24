import { QuickActionListItems } from "./QuickActionListItems";

/**
 * quickActionList
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface QuickActionList {
    /** quickActionListItems[] */
    quickActionListItems?: Array<QuickActionListItems>;
}
