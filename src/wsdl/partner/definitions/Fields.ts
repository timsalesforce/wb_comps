import { FilteredLookupInfo } from "./FilteredLookupInfo";
import { PicklistValues } from "./PicklistValues";

/**
 * fields
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Fields {
    /** xsd:boolean */
    aggregatable?: string;
    /** xsd:boolean */
    aiPredictionField?: string;
    /** xsd:boolean */
    autoNumber?: string;
    /** xsd:int */
    byteLength?: string;
    /** xsd:boolean */
    calculated?: string;
    /** xsd:string */
    calculatedFormula?: string;
    /** xsd:boolean */
    cascadeDelete?: string;
    /** xsd:boolean */
    caseSensitive?: string;
    /** xsd:string */
    compoundFieldName?: string;
    /** xsd:string */
    controllerName?: string;
    /** xsd:boolean */
    createable?: string;
    /** xsd:boolean */
    custom?: string;
    /** xsd:boolean */
    dataTranslationEnabled?: string;
    /** xsd:anyType */
    defaultValue?: string;
    /** xsd:string */
    defaultValueFormula?: string;
    /** xsd:boolean */
    defaultedOnCreate?: string;
    /** xsd:boolean */
    dependentPicklist?: string;
    /** xsd:boolean */
    deprecatedAndHidden?: string;
    /** xsd:int */
    digits?: string;
    /** xsd:boolean */
    displayLocationInDecimal?: string;
    /** xsd:boolean */
    encrypted?: string;
    /** xsd:boolean */
    externalId?: string;
    /** xsd:string */
    extraTypeInfo?: string;
    /** xsd:boolean */
    filterable?: string;
    /** filteredLookupInfo */
    filteredLookupInfo?: FilteredLookupInfo;
    /** xsd:boolean */
    formulaTreatNullNumberAsZero?: string;
    /** xsd:boolean */
    groupable?: string;
    /** xsd:boolean */
    highScaleNumber?: string;
    /** xsd:boolean */
    htmlFormatted?: string;
    /** xsd:boolean */
    idLookup?: string;
    /** xsd:string */
    inlineHelpText?: string;
    /** xsd:string */
    label?: string;
    /** xsd:int */
    length?: string;
    /** xsd:string */
    mask?: string;
    /** xsd:string */
    maskType?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    nameField?: string;
    /** xsd:boolean */
    namePointing?: string;
    /** xsd:boolean */
    nillable?: string;
    /** xsd:boolean */
    permissionable?: string;
    /** picklistValues[] */
    picklistValues?: Array<PicklistValues>;
    /** xsd:boolean */
    polymorphicForeignKey?: string;
    /** xsd:int */
    precision?: string;
    /** xsd:boolean */
    queryByDistance?: string;
    /** xsd:string */
    referenceTargetField?: string;
    /** xsd:string */
    referenceTo?: Array<string>;
    /** xsd:string */
    relationshipName?: string;
    /** xsd:int */
    relationshipOrder?: string;
    /** xsd:boolean */
    restrictedDelete?: string;
    /** xsd:boolean */
    restrictedPicklist?: string;
    /** xsd:int */
    scale?: string;
    /** xsd:boolean */
    searchPrefilterable?: string;
    /** soapType|xsd:string|tns:ID,xsd:base64Binary,xsd:boolean,xsd:double,xsd:int,xsd:long,xsd:string,xsd:date,xsd:dateTime,xsd:time,tns:location,tns:address,xsd:anyType,tns:json,urn:RelationshipReferenceTo,urn:JunctionIdListNames,urn:SearchLayoutFieldsDisplayed,urn:SearchLayoutField,urn:SearchLayoutButtonsDisplayed,urn:SearchLayoutButton,urn:RecordTypesSupported,tns:StringList,tns:ChangeEventHeader */
    soapType?: string;
    /** xsd:boolean */
    sortable?: string;
    /** fieldType|xsd:string|string,picklist,multipicklist,combobox,reference,base64,boolean,currency,textarea,int,double,percent,phone,id,date,datetime,time,url,email,encryptedstring,datacategorygroupreference,location,address,anyType,json,complexvalue,long */
    type?: string;
    /** xsd:boolean */
    unique?: string;
    /** xsd:boolean */
    updateable?: string;
    /** xsd:boolean */
    writeRequiresMasterRead?: string;
}
