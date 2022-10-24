import { Errors } from "./Errors";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result26 {
    /** ID|xsd:string|length,pattern */
    actorIds?: Array<string>;
    /** ID|xsd:string|length,pattern */
    entityId?: string;
    /** errors[] */
    errors?: Array<Errors>;
    /** ID|xsd:string|length,pattern */
    instanceId?: string;
    /** xsd:string */
    instanceStatus?: string;
    /** ID|xsd:string|length,pattern */
    newWorkitemIds?: Array<string>;
    /** xsd:boolean */
    success?: string;
}
