import { ListViewParams } from "./ListViewParams";

/**
 * request
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Request {
    /** listViewParams[] */
    listViewParams?: Array<ListViewParams>;
}
