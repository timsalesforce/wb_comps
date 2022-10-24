import { ObjectPermissions } from "./ObjectPermissions";
import { Types } from "./Types";

/**
 * unpackaged
 * @targetNSAlias `tns`
 * @targetNamespace `http://soap.sforce.com/2006/04/metadata`
 */
export interface Unpackaged {
    /** xsd:string */
    fullName?: string;
    /** APIAccessLevel|xsd:string|Unrestricted,Restricted */
    apiAccessLevel?: string;
    /** xsd:string */
    description?: string;
    /** xsd:string */
    namespacePrefix?: string;
    /** objectPermissions[] */
    objectPermissions?: Array<ObjectPermissions>;
    /** xsd:string */
    packageType?: string;
    /** xsd:string */
    postInstallClass?: string;
    /** xsd:string */
    setupWeblink?: string;
    /** types[] */
    types?: Array<Types>;
    /** xsd:string */
    uninstallClass?: string;
    /** xsd:string */
    version?: string;
}
