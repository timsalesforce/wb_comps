import { OrderBy } from "./OrderBy";

/**
 * request
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Request1 {
    /** xsd:string */
    developerNameOrId?: string;
    /** xsd:int */
    limit?: string;
    /** xsd:int */
    offset?: string;
    /** orderBy[] */
    orderBy?: Array<OrderBy>;
    /** xsd:string */
    sobjectType?: string;
}
