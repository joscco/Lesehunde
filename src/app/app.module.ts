import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { NavbarLinkComponent } from './shared/navbar/navbar-link/navbar-link.component';
import { SectionWrapperComponent } from './section-wrapper/section-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    SectionWrapperComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
