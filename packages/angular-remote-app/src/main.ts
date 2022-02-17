import { enableProdMode, NgModuleRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then((appModuleRef: NgModuleRef<AppModule>) => {

    // Convert `AppComponent` to a custom element.
    const AppElement = createCustomElement(
      AppComponent, {
        injector: appModuleRef.injector
      }
	);

    // Register the custom element with the browser.
    customElements.define('app-element', AppElement);

  })
  .catch(err => console.error(err));
