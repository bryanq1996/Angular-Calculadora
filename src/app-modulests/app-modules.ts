import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../formulario/formulario.component';
import { FormularioComponent } from '../main.component';

const route: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FormularioComponent },
];
@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppModulestsModule {}
