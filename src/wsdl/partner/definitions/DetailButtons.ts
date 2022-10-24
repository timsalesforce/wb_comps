import { Colors } from "./Colors";
import { Icons } from "./Icons";

/**
 * detailButtons
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface DetailButtons {
    /** WebLinkWindowType|xsd:string|newWindow,sidebar,noSidebar,replace,onClickJavaScript */
    behavior?: string;
    /** colors[] */
    colors?: Array<Colors>;
    /** xsd:string */
    content?: string;
    /** WebLinkType|xsd:string|url,sControl,javascript,page,flow */
    contentSource?: string;
    /** xsd:boolean */
    custom?: string;
    /** xsd:string */
    encoding?: string;
    /** xsd:int */
    height?: string;
    /** icons[] */
    icons?: Array<Icons>;
    /** xsd:string */
    label?: string;
    /** xsd:boolean */
    menubar?: string;
    /** xsd:string */
    name?: string;
    /** xsd:boolean */
    overridden?: string;
    /** xsd:boolean */
    resizeable?: string;
    /** xsd:boolean */
    scrollbars?: string;
    /** xsd:boolean */
    showsLocation?: string;
    /** xsd:boolean */
    showsStatus?: string;
    /** xsd:boolean */
    toolbar?: string;
    /** xsd:string */
    url?: string;
    /** xsd:int */
    width?: string;
    /** WebLinkPosition|xsd:string|fullScreen,none,topLeft */
    windowPosition?: string;
}
