import { CompactLayouts } from "./CompactLayouts";
import { RecordTypeCompactLayoutMappings } from "./RecordTypeCompactLayoutMappings";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result14 {
    /** compactLayouts[] */
    compactLayouts?: Array<CompactLayouts>;
    /** ID|xsd:string|length,pattern */
    defaultCompactLayoutId?: string;
    /** recordTypeCompactLayoutMappings[] */
    recordTypeCompactLayoutMappings?: Array<RecordTypeCompactLayoutMappings>;
}
