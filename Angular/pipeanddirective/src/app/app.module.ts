import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';
import { FormsModule } from '@angular/forms';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { CustomDirective } from './customdirective/custom.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgfortrackbyComponent,
    CustomdirectiveComponent,
    CustomDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
