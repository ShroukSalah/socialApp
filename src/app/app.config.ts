import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers/headers-interceptor';
import { provideToastr } from 'ngx-toastr';
import { errorsInterceptor } from './core/interceptors/errors/errors-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { loadingInterceptor } from './core/interceptors/loading/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withViewTransitions({
        skipInitialTransition: true
      }),
      withHashLocation()
    ),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorsInterceptor,loadingInterceptor])),
    provideToastr(),
    provideAnimations()
  ]
};
