import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ContectComponent } from '../contect/contect.component';
import { ContectGridComponent } from '../contect-grid/contect-grid.component';

const routes: Routes = [
  { path: 'contect', component:ContectComponent },
  { path: 'contect-grid', component:ContectGridComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContectsRoutingModule { }
