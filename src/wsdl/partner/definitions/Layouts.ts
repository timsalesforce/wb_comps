import { ButtonLayoutSection } from "./ButtonLayoutSection";
import { DetailLayoutSections } from "./DetailLayoutSections";
import { FeedView } from "./FeedView";
import { QuickActionList } from "./QuickActionList";
import { RelatedContent } from "./RelatedContent";
import { RelatedLists } from "./RelatedLists";
import { SaveOptions } from "./SaveOptions";

/**
 * layouts
 * @targetNSAlias `tns`
 * @targetNamespace `urn:partner.soap.sforce.com`
 */
export interface Layouts {
    /** buttonLayoutSection */
    buttonLayoutSection?: ButtonLayoutSection;
    /** detailLayoutSections[] */
    detailLayoutSections?: Array<DetailLayoutSections>;
    /** editLayoutSections[] */
    editLayoutSections?: Array<DetailLayoutSections>;
    /** feedView */
    feedView?: FeedView;
    /** highlightsPanelLayoutSection */
    highlightsPanelLayoutSection?: DetailLayoutSections;
    /** ID|xsd:string|length,pattern */
    id?: string;
    /** quickActionList */
    quickActionList?: QuickActionList;
    /** relatedContent */
    relatedContent?: RelatedContent;
    /** relatedLists[] */
    relatedLists?: Array<RelatedLists>;
    /** saveOptions[] */
    saveOptions?: Array<SaveOptions>;
}
