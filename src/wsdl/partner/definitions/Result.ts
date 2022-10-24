import { UserInfo } from "./UserInfo";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result {
    /** xsd:string */
    metadataServerUrl?: string;
    /** xsd:boolean */
    passwordExpired?: string;
    /** xsd:boolean */
    sandbox?: string;
    /** xsd:string */
    serverUrl?: string;
    /** xsd:string */
    sessionId?: string;
    /** ID|xsd:string|length,pattern */
    userId?: string;
    /** userInfo */
    userInfo?: UserInfo;
}
