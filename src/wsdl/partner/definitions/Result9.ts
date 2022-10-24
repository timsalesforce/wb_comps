import { Layouts } from "./Layouts";
import { RecordTypeMappings } from "./RecordTypeMappings";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result9 {
    /** layouts[] */
    layouts?: Array<Layouts>;
    /** recordTypeMappings[] */
    recordTypeMappings?: Array<RecordTypeMappings>;
    /** xsd:boolean */
    recordTypeSelectorRequired?: string;
}
