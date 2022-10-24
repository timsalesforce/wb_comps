
/** describeSObjectListViews */
export interface DescribeSObjectListViews {
    /** xsd:string */
    sObjectType?: string;
    /** xsd:boolean */
    recentsOnly?: string;
    /** listViewIsSoqlCompatible|xsd:string|TRUE,FALSE,ALL */
    isSoqlCompatible?: string;
    /** xsd:int */
    limit?: string;
    /** xsd:int */
    offset?: string;
}
