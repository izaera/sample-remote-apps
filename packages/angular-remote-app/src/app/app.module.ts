import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  ngDoBootstrap(_appRef: ApplicationRef): void {

    // Don't bootstrap anything as bootstrap will be done via custom element

  }
}
