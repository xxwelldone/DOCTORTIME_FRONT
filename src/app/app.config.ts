import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { requestInterceptor } from './interceptors/request.interceptor';
import { provideStore, StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([requestInterceptor])),
    provideEnvironmentNgxMask(),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot({
        user: authReducers,
    })),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimationsAsync()
],
};
