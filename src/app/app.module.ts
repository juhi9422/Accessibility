import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WcagSuccesscriteriaComponent } from './wcag-successcriteria/wcag-successcriteria.component';
import { Nontext111Component } from './nontext1.1.1/nontext1.1.1.component';
import { AudioVideoOnly121Component } from './audio-video-only1.2.1/audio-video-only1.2.1.component';
import { AudioDescMediaAlt123Component } from './audio-desc-media-alt1.2.3/audio-desc-media-alt1.2.3.component';
import { CaptionsLive124Component } from './captions-live1.2.4/captions-live1.2.4.component';
import { CaptionsPreRec122Component } from './captions-pre-rec1.2.2/captions-pre-rec1.2.2.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    WcagSuccesscriteriaComponent,
    Nontext111Component,
    AudioVideoOnly121Component,
    AudioDescMediaAlt123Component,
    CaptionsLive124Component,
    CaptionsPreRec122Component,
    AudioDesc125Component,
    InfoRelation131Component,
    MeaningfulSeq132Component,
    SensoryChar133Component,
    UseofColor141Component,
    AudioControl142Component,
    ContrastMin143Component,
    ResizeText144Component,
    ImageofText145Component,
    Keyboard211Component,
    NoKeyboardTrap212Component,
    TimimgAdjust221Component,
    PauseStopHide222Component,
    ThreeFlashesBelowThreshold231Component,
    Bypasslock241Component,
    PageTitled242Component,
    FocusOrder243Component,
    LinkPurpose244Component,
    Multiplewaystowebpage245Component,
    Headinglabel246Component,
    FocusVisible247Component,
    LanguageofPage311Component,
    LanguageofParts312Component,
    OnFocus321Component,
    OnInput322Component,
    ConsistentNav323Component,
    ConsistentIdenti324Component,
    ErrorIdentification331Component,
    LabelsInstructions332Component,
    ErrorSuggestion333Component,
    ErrorPrevention334Component,
    Parsing411Component,
    NameRoleValue412Component,
    Orientation134Component,
    IdentifyInputPurpose135Component,
    Reflow1410Component,
    NonTextContrast1411Component,
    TextSpacing1412Component,
    ContentHoverFocus1413Component,
    CharacterKEyShortcuts214Component,
    PointerGesture251Component,
    PointerCancellation252Component,
    LabelinName253Component,
    MotionActuation254Component,
    StatusMessage413Component,
    RemediationComponent,
    AccordionComponent,
    AlertComponent,
    ButtonComponent,
    CarouselComponent,
    CheckboxComponent,
    DatepickerComponent,
    DialogComponent,
    ExpandCollapseComponent,
    LinkComponent,
    LiveRegionPlaygroundComponent,
    NavigationHierarchicalComponent,
    PredictiveTextComponent,
    ProgressbarComponent,
    RadioAndRadioGroupsComponent,
    ShoppingCartComponent,
    SliderComponent,
    TableComponent,
    TabPanelComponent,
    TooltipComponent,
    TreeviewComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
