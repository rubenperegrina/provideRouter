import { ApplicationConfig, inject } from '@angular/core';
import { NavigationError, provideRouter, withDebugTracing, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withNavigationErrorHandler, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
      withEnabledBlockingInitialNavigation(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload'
      }),
      withDebugTracing(),
      withNavigationErrorHandler((e: NavigationError) => inject(MyErrorTracker).trackError(e))
    )
  ]
};