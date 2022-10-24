import { Queries } from "./Queries";

/** listMetadata */
export interface ListMetadata {
    /** queries[] */
    queries?: Array<Queries>;
    /** xsd:double */
    asOfVersion?: string;
}
