import {Component} from '@angular/core';
import {SectionWrapperComponent} from "../../wrappers/section-wrapper/section-wrapper.component";
import {ContentWrapperComponent} from "../../wrappers/content-wrapper/content-wrapper.component";
import {ImageWrapperComponent} from "../../wrappers/image-wrapper/image-wrapper.component";
import {RouterLink} from "@angular/router";
import {ScrollSpyDirective} from "../../scroll-spy.directive";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [
    SectionWrapperComponent,
    ContentWrapperComponent,
    ImageWrapperComponent,
    RouterLink,
    ScrollSpyDirective,
    NgClass
  ],
  standalone: true
})
export class MainPageComponent{
  currentSection = 'start';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
