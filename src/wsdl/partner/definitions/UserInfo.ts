
/**
 * userInfo
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface UserInfo {
    /** xsd:boolean */
    accessibilityMode?: string;
    /** xsd:boolean */
    chatterExternal?: string;
    /** xsd:string */
    currencySymbol?: string;
    /** xsd:int */
    orgAttachmentFileSizeLimit?: string;
    /** xsd:string */
    orgDefaultCurrencyIsoCode?: string;
    /** xsd:string */
    orgDefaultCurrencyLocale?: string;
    /** xsd:boolean */
    orgDisallowHtmlAttachments?: string;
    /** xsd:boolean */
    orgHasPersonAccounts?: string;
    /** ID|xsd:string|length,pattern */
    organizationId?: string;
    /** xsd:boolean */
    organizationMultiCurrency?: string;
    /** xsd:string */
    organizationName?: string;
    /** ID|xsd:string|length,pattern */
    profileId?: string;
    /** ID|xsd:string|length,pattern */
    roleId?: string;
    /** xsd:int */
    sessionSecondsValid?: string;
    /** xsd:string */
    userDefaultCurrencyIsoCode?: string;
    /** xsd:string */
    userEmail?: string;
    /** xsd:string */
    userFullName?: string;
    /** ID|xsd:string|length,pattern */
    userId?: string;
    /** xsd:string */
    userLanguage?: string;
    /** xsd:string */
    userLocale?: string;
    /** xsd:string */
    userName?: string;
    /** xsd:string */
    userTimeZone?: string;
    /** xsd:string */
    userType?: string;
    /** xsd:string */
    userUiSkin?: string;
}
