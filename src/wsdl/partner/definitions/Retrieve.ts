
/** retrieve */
export interface Retrieve {
    /** xsd:string */
    fieldList?: string;
    /** xsd:string */
    sObjectType?: string;
    /** ID|xsd:string|length,pattern */
    ids?: Array<string>;
}
