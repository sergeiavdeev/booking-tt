import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RoutingModule} from "./routing.module";
import { appReducer, metaReducers} from "./store/reducers/router.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { NavComponent } from './components/nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DeviationEffects } from './store/effects/deviation.effects';
import { RedirectInterceptor } from './services/redirect.interceptor';
import { HttpErrorHandler } from './services/error.handler';
import { UserEffects } from './store/effects/user.effects';
import { TournamentComponent } from './components/tournament/tournament.component';
import { MainComponent } from './components/main/main.component';
import { TrainingComponent } from './components/training/training.component';
import { RentComponent } from './components/rent/rent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TournamentComponent,
    MainComponent,
    TrainingComponent,
    RentComponent
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([DeviationEffects, UserEffects]),
    StoreRouterConnectingModule.forRoot(),
    RoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RedirectInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: HttpErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
