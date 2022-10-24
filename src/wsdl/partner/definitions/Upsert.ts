import { SObjects } from "./Sobjects";

/** upsert */
export interface Upsert {
    /** xsd:string */
    externalIDFieldName?: string;
    /** sObjects[] */
    sObjects?: Array<SObjects>;
}
