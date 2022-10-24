import { ThemeItems } from "./ThemeItems";

/**
 * theme
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Theme {
    /** themeItems[] */
    themeItems?: Array<ThemeItems>;
}
