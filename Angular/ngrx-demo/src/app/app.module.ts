import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoreducers } from './ngrx/todos.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './ngrx/todos.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoreducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: 'Ngrx Todo demo' }),
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// {
//   todos: {

//   },
//   auth: {

//   },
//   products: {

//   }
// }
