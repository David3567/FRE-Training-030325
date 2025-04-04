import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetvalueComponent } from './setvalue/setvalue.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { SelectallComponent } from './selectall/selectall.component';

@NgModule({
  declarations: [AppComponent, SetvalueComponent, CustomvalidatorComponent, SelectallComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
