import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './screens/dashboardScreen/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { NavbarLinkComponent } from './shared/navbar/navbar-link/navbar-link.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NavbarLinkComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
