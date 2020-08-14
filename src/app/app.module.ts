import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import store devtools
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'; // Angular CLI environment

// import store module
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { TestReduxComponent } from './test-redux/test-redux.component';
import { textReducer } from './text.reducer'

@NgModule({
  declarations: [
    AppComponent, MyCounterComponent, TestReduxComponent
  ],
  imports: [
    StoreModule.forRoot({ count: counterReducer, text : textReducer }),// bersifat global kalau forRoot
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
