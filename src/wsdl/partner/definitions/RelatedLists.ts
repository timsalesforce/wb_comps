import { DetailButtons } from "./DetailButtons";
import { Columns } from "./Columns";
import { Sort } from "./Sort";

/**
 * relatedLists
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface RelatedLists {
    /** ShareAccessLevel|xsd:string|Read,Edit,All */
    accessLevelRequiredForCreate?: string;
    /** buttons[] */
    buttons?: Array<DetailButtons>;
    /** columns[] */
    columns?: Array<Columns>;
    /** xsd:boolean */
    custom?: string;
    /** xsd:string */
    field?: string;
    /** xsd:string */
    label?: string;
    /** xsd:int */
    limitRows?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    sobject?: string;
    /** sort[] */
    sort?: Array<Sort>;
}
