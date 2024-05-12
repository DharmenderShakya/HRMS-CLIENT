import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddClientComponent } from '../add-client/add-client.component';
import { AllClientComponent } from '../all-client/all-client.component';
import { BillingComponent } from '../billing/billing.component';
import { EditClientComponent } from '../edit-client/edit-client.component';

const routes: Routes = [
  { path: 'add-client', component:AddClientComponent },
  { path: 'all-client', component:AllClientComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'editClient', component: EditClientComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientRoutingModule { }
