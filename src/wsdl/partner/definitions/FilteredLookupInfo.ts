
/**
 * filteredLookupInfo
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface FilteredLookupInfo {
    /** xsd:string */
    controllingFields?: Array<string>;
    /** xsd:boolean */
    dependent?: string;
    /** xsd:boolean */
    optionalFilter?: string;
}
