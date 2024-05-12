import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddHolidayComponent } from '../add-holiday/add-holiday.component';
import { AllHolidayComponent } from '../all-holiday/all-holiday.component';
import { EditHolidayComponent } from '../edit-holiday/edit-holiday.component';

const routes: Routes = [
  { path: 'addholiday', component:AddHolidayComponent },
  { path: 'allholiday', component:AllHolidayComponent },
  { path: 'editholiday', component: EditHolidayComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HolidaysRoutingModule { }
