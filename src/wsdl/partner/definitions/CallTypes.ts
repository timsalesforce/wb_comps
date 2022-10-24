import { InfoFields } from "./InfoFields";
import { ScreenPopOptions } from "./ScreenPopOptions";
import { Sections } from "./Sections";

/**
 * callTypes
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface CallTypes {
    /** infoFields[] */
    infoFields?: Array<InfoFields>;
    /** xsd:string */
    name?: string;
    /** screenPopOptions[] */
    screenPopOptions?: Array<ScreenPopOptions>;
    /** xsd:string */
    screenPopsOpenWithin?: string;
    /** sections[] */
    sections?: Array<Sections>;
}
