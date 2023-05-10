import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../formulario/formulario.component';

const route: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
];
@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppModulestsModule {}
