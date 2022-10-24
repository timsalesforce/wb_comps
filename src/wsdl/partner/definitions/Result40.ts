import { Errors } from "./Errors";
import { RenderedEmail } from "./RenderedEmail";

/**
 * result
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Result40 {
    /** errors[] */
    errors?: Array<Errors>;
    /** renderedEmail */
    renderedEmail?: RenderedEmail;
    /** xsd:boolean */
    success?: string;
}
