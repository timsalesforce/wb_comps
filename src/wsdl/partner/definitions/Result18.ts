import { Columns1 } from "./Columns1";
import { Records } from "./Records";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result18 {
    /** columns[] */
    columns?: Array<Columns1>;
    /** xsd:string */
    developerName?: string;
    /** xsd:boolean */
    done?: string;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** xsd:string */
    label?: string;
    /** records[] */
    records?: Array<Records>;
    /** xsd:int */
    size?: string;
}
