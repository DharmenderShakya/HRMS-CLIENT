import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AllLeaveRequestComponent } from '../all-leave-request/all-leave-request.component';
import { LeaveBalanceComponent } from '../leave-balance/leave-balance.component';
import { LeaveReportComponent } from '../leave-report/leave-report.component';
import { LeaveTypeComponent } from '../leave-type/leave-type.component';

const routes: Routes = [
  { path: 'leavebalance', component:LeaveBalanceComponent },
  { path: 'alleaves', component:AllLeaveRequestComponent },
  { path: 'leavereport', component: LeaveReportComponent },
  { path: 'leavetype', component: LeaveTypeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LeavesRoutingModule { }
