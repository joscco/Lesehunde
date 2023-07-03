import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar-router-link',
  templateUrl: './navbar-link.component.html'
})
export class NavbarLinkComponent {

  @Input()
  route?: string;
  @Input()
  iconId?: string;
  @Input()
  linkText?: string;

  constructor() {
  }

}
