import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-section-wrapper',
  templateUrl: './section-wrapper.component.html',
  imports: [
    NgClass
  ],
  standalone: true
})
export class SectionWrapperComponent {

  @Input()
  doublePage: boolean
  constructor() { }
}
