import {Component, Input} from '@angular/core';

@Component({
  selector: 'image-wrapper',
  templateUrl: './image-wrapper.component.html',
  standalone: true
})
export class ImageWrapperComponent {

  @Input()
  path: string

  constructor() { }

}
