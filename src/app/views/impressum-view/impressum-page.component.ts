import {Component} from '@angular/core';
import {SectionWrapperComponent} from "../../wrappers/section-wrapper/section-wrapper.component";
import {ContentWrapperComponent} from "../../wrappers/content-wrapper/content-wrapper.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-impressum-page',
  templateUrl: './impressum-page.component.html',
  imports: [
    SectionWrapperComponent,
    ContentWrapperComponent,
    RouterLink
  ],
  standalone: true
})
export class ImpressumComponent{

  constructor() { }
}
