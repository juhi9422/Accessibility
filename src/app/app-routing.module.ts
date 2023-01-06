import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WcagSuccesscriteriaComponent } from './wcag-successcriteria/wcag-successcriteria.component';
import { Nontext111Component } from './nontext1.1.1/nontext1.1.1.component';
import { AudioVideoOnly121Component } from './audio-video-only1.2.1/audio-video-only1.2.1.component';
import { CaptionsPreRec122Component } from './captions-pre-rec1.2.2/captions-pre-rec1.2.2.component';
import { AudioDescMediaAlt123Component } from './audio-desc-media-alt1.2.3/audio-desc-media-alt1.2.3.component';
import { CaptionsLive124Component } from './captions-live1.2.4/captions-live1.2.4.component';
import { AudioDesc125Component } from './audio-desc1.2.5/audio-desc1.2.5.component';
import { InfoRelation131Component } from './info-relation1.3.1/info-relation1.3.1.component';
import { MeaningfulSeq132Component } from './meaningful-seq1.3.2/meaningful-seq1.3.2.component';
import { SensoryChar133Component } from './sensory-char1.3.3/sensory-char1.3.3.component';
import { UseofColor141Component } from './useof-color1.4.1/useof-color1.4.1.component';
import { AudioControl142Component } from './audio-control1.4.2/audio-control1.4.2.component';
import { ContrastMin143Component } from './contrast-min1.4.3/contrast-min1.4.3.component';
import { ResizeText144Component } from './resize-text1.4.4/resize-text1.4.4.component';
import { ImageofText145Component } from './imageof-text1.4.5/imageof-text1.4.5.component';
import { Keyboard211Component } from './keyboard2.1.1/keyboard2.1.1.component';
import { NoKeyboardTrap212Component } from './no-keyboard-trap2.1.2/no-keyboard-trap2.1.2.component';
import { TimimgAdjust221Component } from './timimg-adjust2.2.1/timimg-adjust2.2.1.component';
import { PauseStopHide222Component } from './pause-stop-hide2.2.2/pause-stop-hide2.2.2.component';
import { ThreeFlashesBelowThreshold231Component } from './three-flashes-below-threshold2.3.1/three-flashes-below-threshold2.3.1.component';
import { Bypasslock241Component } from './bypasslock2.4.1/bypasslock2.4.1.component';
import { PageTitled242Component } from './page-titled2.4.2/page-titled2.4.2.component';
import { FocusOrder243Component } from './focus-order2.4.3/focus-order2.4.3.component';
import { LinkPurpose244Component } from './link-purpose2.4.4/link-purpose2.4.4.component';
import { Multiplewaystowebpage245Component } from './multiplewaystowebpage2.4.5/multiplewaystowebpage2.4.5.component';
import { Headinglabel246Component } from './headinglabel2.4.6/headinglabel2.4.6.component';
import { FocusVisible247Component } from './focus-visible2.4.7/focus-visible2.4.7.component';
import { LanguageofPage311Component } from './languageof-page3.1.1/languageof-page3.1.1.component';
import { LanguageofParts312Component } from './languageof-parts3.1.2/languageof-parts3.1.2.component';
import { OnFocus321Component } from './on-focus3.2.1/on-focus3.2.1.component';
import { OnInput322Component } from './on-input3.2.2/on-input3.2.2.component';
import { ConsistentNav323Component } from './consistent-nav3.2.3/consistent-nav3.2.3.component';
import { ConsistentIdenti324Component } from './consistent-identi3.2.4/consistent-identi3.2.4.component';
import { ErrorIdentification331Component } from './error-identification3.3.1/error-identification3.3.1.component';
import { LabelsInstructions332Component } from './labels-instructions3.3.2/labels-instructions3.3.2.component';
import { ErrorSuggestion333Component } from './error-suggestion3.3.3/error-suggestion3.3.3.component';
import { ErrorPrevention334Component } from './error-prevention3.3.4/error-prevention3.3.4.component';
import { Parsing411Component } from './parsing4.1.1/parsing4.1.1.component';
import { NameRoleValue412Component } from './name-role-value4.1.2/name-role-value4.1.2.component';
import { Orientation134Component } from './orientation1.3.4/orientation1.3.4.component';
import { IdentifyInputPurpose135Component } from './identify-input-purpose1.3.5/identify-input-purpose1.3.5.component';
import { Reflow1410Component } from './reflow1.4.10/reflow1.4.10.component';
import { NonTextContrast1411Component } from './non-text-contrast1.4.11/non-text-contrast1.4.11.component';
import { TextSpacing1412Component } from './text-spacing1.4.12/text-spacing1.4.12.component';
import { ContentHoverFocus1413Component } from './content-hover-focus1.4.13/content-hover-focus1.4.13.component';
import { CharacterKEyShortcuts214Component } from './character-key-shortcuts2.1.4/character-key-shortcuts2.1.4.component';
import { PointerGesture251Component } from './pointer-gesture2.5.1/pointer-gesture2.5.1.component';
import { PointerCancellation252Component } from './pointer-cancellation2.5.2/pointer-cancellation2.5.2.component';
import { LabelinName253Component } from './labelin-name2.5.3/labelin-name2.5.3.component';
import { MotionActuation254Component } from './motion-actuation2.5.4/motion-actuation2.5.4.component';
import { StatusMessage413Component } from './status-message4.1.3/status-message4.1.3.component';
import { RemediationComponent } from './remediation/remediation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse.component';
import { LinkComponent } from './link/link.component';
import { LiveRegionPlaygroundComponent } from './live-region-playground/live-region-playground.component';
import { NavigationHierarchicalComponent } from './navigation-hierarchical/navigation-hierarchical.component';
import { PredictiveTextComponent } from './predictive-text/predictive-text.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RadioAndRadioGroupsComponent } from './radio-and-radio-groups/radio-and-radio-groups.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},

  {path:"remediation",component:RemediationComponent},
  {path:"remediation/accordion",component:AccordionComponent},
  {path:"remediation/alert",component:AlertComponent},
  {path:"remediation/button",component:ButtonComponent},
  {path:"remediation/carousel",component:CarouselComponent},
  {path:"remediation/checkbox",component:CheckboxComponent},
  {path:"remediation/datepicker",component:DatepickerComponent},
  {path:"remediation/dialog",component:DialogComponent},
  {path:"remediation/expand-collapse",component:ExpandCollapseComponent},
  {path:"remediation/link",component:LinkComponent},
  {path:"remediation/live-region-playground",component:LiveRegionPlaygroundComponent},
  {path:"remediation/navigation",component:NavigationHierarchicalComponent},
  {path:"remediation/predictive-text",component:PredictiveTextComponent},
  {path:"remediation/progress-bar",component:ProgressbarComponent},
  {path:"remediation/radio-and-radio-group",component:RadioAndRadioGroupsComponent},
  {path:"remediation/shopping-cart",component:ShoppingCartComponent},
  {path:"remediation/slider",component:SliderComponent},
  {path:"remediation/table",component:TableComponent},
  {path:"remediation/tabpanel",component:TabPanelComponent},
  {path:"remediation/tooltip",component:TooltipComponent},
  {path:"remediation/tree-view",component:TreeviewComponent},


  {path:"wcag-successcriteria",component:WcagSuccesscriteriaComponent},
  {path:"understanding-sc-1-1-1-non-text-content",component:Nontext111Component},
  {path:"understanding-sc-1-2-1-audio-only-and-video-only-prerecorded",component:AudioVideoOnly121Component},
  {path:"understanding-sc-1-2-2-captions-prerecorded",component:CaptionsPreRec122Component},
  {path:"understanding-sc-1-2-3-audio-description-or-media-alternative-prerecorded",component:AudioDescMediaAlt123Component},
  {path:"understanding-sc-1-2-4-captions-live",component:CaptionsLive124Component},
  {path:"understanding-sc-1-2-5-audio-description-prerecorded",component:AudioDesc125Component},
  {path:"understanding-sc-1-3-1-info-and-relationship",component:InfoRelation131Component},
  {path:"understanding-sc-1-3-2-meaningful-sequence",component:MeaningfulSeq132Component},
  {path:"understanding-sc-1-3-3-sensory-characteristics",component:SensoryChar133Component},
  {path:"understanding-sc-1-4-1-use-of-color",component:UseofColor141Component},
  {path:"understanding-sc-1-4-2-audio-control",component:AudioControl142Component},
  {path:"understanding-sc-1-4-3-contrast-minimum",component:ContrastMin143Component},
  {path:"understanding-sc-1-4-4-resize-text",component:ResizeText144Component},
  {path:"understanding-sc-1-4-5-image-of-text",component:ImageofText145Component},
  {path:"understanding-sc-2-1-1-keyboard",component:Keyboard211Component},
  {path:"understanding-sc-2-1-2-no-keyboard-trap",component:NoKeyboardTrap212Component},
  {path:"understanding-sc-2-2-1-timing-adjustable",component:TimimgAdjust221Component},
  {path:"understanding-sc-2-2-2-pause-stop-hide",component:PauseStopHide222Component},
  {path:"understanding-sc-2-3-1-three-flashes-or-below-threshold",component:ThreeFlashesBelowThreshold231Component},
  {path:"understanding-sc-2-4-1-bypass-blocks",component:Bypasslock241Component},
  {path:"understanding-sc-2-4-2-page-titled",component:PageTitled242Component},
  {path:"understanding-sc-2-4-3-focus-order",component:FocusOrder243Component},
  {path:"understanding-sc-2-4-4-link-purpose-in-context",component:LinkPurpose244Component},
  {path:"understanding-sc-2-4-5-multiple-ways-to-locate-web-pages",component:Multiplewaystowebpage245Component},
  {path:"understanding-sc-2-4-6-headings-labels",component:Headinglabel246Component},
  {path:"understanding-sc-2-4-7-focus-visible",component:FocusVisible247Component},
  {path:"understanding-sc-3-1-1-language-of-page",component:LanguageofPage311Component},
  {path:"understanding-sc-3-1-2-language-of-parts",component:LanguageofParts312Component},
  {path:"understanding-sc-3-2-1-on-focus",component:OnFocus321Component},
  {path:"understanding-sc-3-2-2-on-input",component:OnInput322Component},
  {path:"understanding-sc-3-2-3-consistent-navigation",component:ConsistentNav323Component},
  {path:"understanding-sc-3-2-4-consistent-identification",component:ConsistentIdenti324Component},
  {path:"understanding-sc-3-3-1-error-identification",component:ErrorIdentification331Component},
  {path:"understanding-sc-3-3-2-labels-or-instructions",component:LabelsInstructions332Component},
  {path:"understanding-sc-3-3-3-error-suggestion",component:ErrorSuggestion333Component},
  {path:"understanding-sc-3-3-4-error-prevention-legal-financial-data",component:ErrorPrevention334Component},
  {path:"understanding-sc-4-1-1-parsing",component:Parsing411Component},
  {path:"understanding-sc-4-1-2-name-role-value",component:NameRoleValue412Component},
  {path:"understanding-sc-1-3-4-orientation",component:Orientation134Component},
  {path:"understanding-sc-1-3-5-identify-input-purpose",component:IdentifyInputPurpose135Component},
  {path:"understanding-sc-1-4-10-reflow",component:Reflow1410Component},
  {path:"understanding-sc-1-4-11-non-text-contrast",component:NonTextContrast1411Component},
  {path:"understanding-sc-1-4-12-text-spacing",component:TextSpacing1412Component},
  {path:"understanding-sc-1-4-13-content-on-hover-or-focus",component:ContentHoverFocus1413Component},
  {path:"understanding-sc-2-1-4-character-key-shortcuts",component:CharacterKEyShortcuts214Component},
  {path:"understanding-sc-2-5-1-pointer-gestures",component:PointerGesture251Component},
  {path:"understanding-sc-2-5-2-pointer-cancellation",component:PointerCancellation252Component},
  {path:"understanding-sc-2-5-3-label-in-name",component:LabelinName253Component},
  {path:"understanding-sc-2-5-4-motion-actuation",component:MotionActuation254Component},
  {path:"understanding-sc-4-1-3-status-messages",component:StatusMessage413Component},
  {path:"demo",component:DemoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
