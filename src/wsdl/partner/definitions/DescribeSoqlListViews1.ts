import { Columns1 } from "./Columns1";
import { OrderBy } from "./OrderBy";
import { WhereCondition } from "./WhereCondition";

/**
 * describeSoqlListViews
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface DescribeSoqlListViews1 {
    /** columns[] */
    columns?: Array<Columns1>;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** orderBy[] */
    orderBy?: Array<OrderBy>;
    /** xsd:string */
    query?: string;
    /** ID|xsd:string|length,pattern */
    relatedEntityId?: string;
    /** xsd:string */
    scope?: string;
    /** ID|xsd:string|length,pattern */
    scopeEntityId?: string;
    /** xsd:string */
    sobjectType?: string;
    /** whereCondition */
    whereCondition?: WhereCondition;
}
