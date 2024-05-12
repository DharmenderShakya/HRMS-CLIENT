import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmployeeAttendanceComponent } from '../employee-attendance/employee-attendance.component';
import { EmployeeAttendanceSheetComponent } from '../employee-attendance-sheet/employee-attendance-sheet.component';
import { TodayAttentanceComponent } from '../today-attentance/today-attentance.component';

const routes: Routes = [
  { path: 'attendance', component:EmployeeAttendanceComponent },
  { path: 'attendance-sheet', component: EmployeeAttendanceSheetComponent },
  { path: 'attendance-today', component: TodayAttentanceComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AttendanceRoutingModule { }
