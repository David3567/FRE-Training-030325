import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SetvalueComponent } from './setvalue/setvalue.component';
import { SelectallComponent } from './selectall/selectall.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'setvalue', component: SetvalueComponent },
  { path: 'selectall', component: SelectallComponent },
  { path: 'customvalidator', component: CustomvalidatorComponent },
  { path: '', redirectTo: 'selectall', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SetvalueComponent,
    SelectallComponent,
    CustomvalidatorComponent,
  ],
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
