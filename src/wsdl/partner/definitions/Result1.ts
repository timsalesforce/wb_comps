import { ActionOverrides } from "./ActionOverrides";
import { ChildRelationships } from "./ChildRelationships";
import { Fields } from "./Fields";
import { NamedLayoutInfos } from "./NamedLayoutInfos";
import { RecordTypeInfos } from "./RecordTypeInfos";
import { SupportedScopes } from "./SupportedScopes";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result1 {
    /** actionOverrides[] */
    actionOverrides?: Array<ActionOverrides>;
    /** xsd:boolean */
    activateable?: string;
    /** xsd:string */
    associateEntityType?: string;
    /** xsd:string */
    associateParentEntity?: string;
    /** childRelationships[] */
    childRelationships?: Array<ChildRelationships>;
    /** xsd:boolean */
    compactLayoutable?: string;
    /** xsd:boolean */
    createable?: string;
    /** xsd:boolean */
    custom?: string;
    /** xsd:boolean */
    customSetting?: string;
    /** xsd:boolean */
    dataTranslationEnabled?: string;
    /** xsd:boolean */
    deepCloneable?: string;
    /** xsd:string */
    defaultImplementation?: string;
    /** xsd:boolean */
    deletable?: string;
    /** xsd:boolean */
    deprecatedAndHidden?: string;
    /** xsd:boolean */
    feedEnabled?: string;
    /** fields[] */
    fields?: Array<Fields>;
    /** xsd:boolean */
    hasSubtypes?: string;
    /** xsd:boolean */
    idEnabled?: string;
    /** xsd:string */
    implementedBy?: string;
    /** xsd:string */
    implementsInterfaces?: string;
    /** xsd:boolean */
    isInterface?: string;
    /** xsd:boolean */
    isSubtype?: string;
    /** xsd:string */
    keyPrefix?: string;
    /** xsd:string */
    label?: string;
    /** xsd:string */
    labelPlural?: string;
    /** xsd:boolean */
    layoutable?: string;
    /** xsd:boolean */
    mergeable?: string;
    /** xsd:boolean */
    mruEnabled?: string;
    /** xsd:string */
    name?: string;
    /** namedLayoutInfos[] */
    namedLayoutInfos?: Array<NamedLayoutInfos>;
    /** xsd:string */
    networkScopeFieldName?: string;
    /** xsd:boolean */
    queryable?: string;
    /** recordTypeInfos[] */
    recordTypeInfos?: Array<RecordTypeInfos>;
    /** xsd:boolean */
    replicateable?: string;
    /** xsd:boolean */
    retrieveable?: string;
    /** xsd:boolean */
    searchLayoutable?: string;
    /** xsd:boolean */
    searchable?: string;
    /** supportedScopes[] */
    supportedScopes?: Array<SupportedScopes>;
    /** xsd:boolean */
    triggerable?: string;
    /** xsd:boolean */
    undeletable?: string;
    /** xsd:boolean */
    updateable?: string;
    /** xsd:string */
    urlDetail?: string;
    /** xsd:string */
    urlEdit?: string;
    /** xsd:string */
    urlNew?: string;
}
