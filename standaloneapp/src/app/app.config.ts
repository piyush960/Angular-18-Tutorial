import { ApplicationConfig, provideZoneChangeDetection, isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productReducer } from './_store/product.reducer';
import { ProductEffect } from './_store/product.effects';
import {provideEnvironmentNgxMask} from 'ngx-mask';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideExperimentalZonelessChangeDetection(), 
    provideEnvironmentNgxMask(),
    provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideStore({'product': productReducer}), provideEffects([ProductEffect]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
