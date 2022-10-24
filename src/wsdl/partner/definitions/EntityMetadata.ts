import { ErrorMetadata } from "./ErrorMetadata";
import { FieldMetadata } from "./FieldMetadata";
import { IntentQueryMetadata } from "./IntentQueryMetadata";
import { SearchPromotionMetadata } from "./SearchPromotionMetadata";
import { SpellCorrectionMetadata } from "./SpellCorrectionMetadata";

/**
 * entityMetadata
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface EntityMetadata {
    /** xsd:string */
    entityName?: string;
    /** errorMetadata */
    errorMetadata?: ErrorMetadata;
    /** fieldMetadata[] */
    fieldMetadata?: Array<FieldMetadata>;
    /** intentQueryMetadata */
    intentQueryMetadata?: IntentQueryMetadata;
    /** searchPromotionMetadata */
    searchPromotionMetadata?: SearchPromotionMetadata;
    /** spellCorrectionMetadata */
    spellCorrectionMetadata?: SpellCorrectionMetadata;
}
