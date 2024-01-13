import {enableProdMode} from '@angular/core';

import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withHashLocation} from "@angular/router";
import {MainPageComponent} from "./app/views/main-view/main-page.component";
import {ImpressumComponent} from "./app/views/impressum-view/impressum-page.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {path: '', component: MainPageComponent},
      {path: 'impressum', component: ImpressumComponent},
      {path: '**', redirectTo: ''}
    ], withHashLocation())
  ]
});
