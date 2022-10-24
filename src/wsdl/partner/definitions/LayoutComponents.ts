
/**
 * layoutComponents
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface LayoutComponents {
    /** xsd:int */
    displayLines?: string;
    /** xsd:int */
    tabOrder?: string;
    /** layoutComponentType|xsd:string|ReportChart,Field,Separator,SControl,EmptySpace,VisualforcePage,ExpandedLookup,AuraComponent,Canvas,CustomLink,AnalyticsCloud */
    type?: string;
    /** xsd:string */
    value?: string;
}
