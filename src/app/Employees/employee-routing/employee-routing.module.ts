import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AllEmployeeComponent } from '../all-employee/all-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { EmployeeSalaryComponent } from '../employee-salary/employee-salary.component';

const routes: Routes = [
  { path: 'addemployee', component:AddEmployeeComponent },
  { path: 'allemployee', component:AllEmployeeComponent },
  { path: 'editemployee', component: EditEmployeeComponent },
  { path: 'profile', component: EmployeeProfileComponent },
  { path: 'salary', component: EmployeeSalaryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeRoutingModule { }
