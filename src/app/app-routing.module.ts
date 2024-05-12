import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { CalenderComponent } from './calender/calender.component';
import { CandidateComponent } from './Candidates/candidate/candidate.component';
import { ChatComponent } from './chat/chat.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JobListComponent } from './Candidates/job-list/job-list.component';
import { PayslipComponent } from './payslip/payslip.component';
import { ResumeComponent } from './Candidates/resume/resume.component';
import { ShortListedCandidateComponent } from './Candidates/short-listed-candidate/short-listed-candidate.component';
import { TaskComponent } from './task/task.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';
import { DeshboardComponent } from './full-home/deshboard/deshboard.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LoginComponent } from './login/login.component';
import { ProjectdetailsComponent } from './Projects/projectdetails/projectdetails.component';
import { AddClientComponent } from './Clients/add-client/add-client.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { AddHolidayComponent } from './Holidays/add-holiday/add-holiday.component';
import { AddProjectComponent } from './Projects/add-project/add-project.component';
import { AllClientComponent } from './Clients/all-client/all-client.component';
import { AllEmployeeComponent } from './Employees/all-employee/all-employee.component';
import { AllHolidayComponent } from './Holidays/all-holiday/all-holiday.component';
import { AllLeaveRequestComponent } from './Leaves/all-leave-request/all-leave-request.component';
import { AllProjectComponent } from './Projects/all-project/all-project.component';
import { ContectComponent } from './Contects/contect/contect.component';
import { ContectGridComponent } from './Contects/contect-grid/contect-grid.component';
import { EditClientComponent } from './Clients/edit-client/edit-client.component';
import { EditEmployeeComponent } from './Employees/edit-employee/edit-employee.component';
import { EditHolidayComponent } from './Holidays/edit-holiday/edit-holiday.component';
import { EmailReadMailComponent } from './Email/email-read-mail/email-read-mail.component';
import { EmailcomposeComponent } from './Email/emailcompose/emailcompose.component';
import { EmailinboxComponent } from './Email/emailinbox/emailinbox.component';
import { EmployeeAttendanceComponent } from './Attendance/employee-attendance/employee-attendance.component';
import { EmployeeAttendanceSheetComponent } from './Attendance/employee-attendance-sheet/employee-attendance-sheet.component';
import { EmployeeProfileComponent } from './Employees/employee-profile/employee-profile.component';
import { EmployeeSalaryComponent } from './Employees/employee-salary/employee-salary.component';
import { LeaveBalanceComponent } from './Leaves/leave-balance/leave-balance.component';
import { LeaveReportComponent } from './Leaves/leave-report/leave-report.component';
import { LeaveTypeComponent } from './Leaves/leave-type/leave-type.component';
import { ProjectEstimatesComponent } from './Projects/project-estimates/project-estimates.component';
import { TodayAttentanceComponent } from './Attendance/today-attentance/today-attentance.component';
import { FullHomeComponent } from './full-home/full-home.component';
import { EmployeeDeshboardComponent } from './Employees/employee-deshboard/employee-deshboard.component';
import { ClientDeshboardComponent } from './Clients/client-deshboard/client-deshboard.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { BillingComponent } from './Clients/billing/billing.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
{
  path: 'deshboard',
  component: FullHomeComponent,
  children: [
    {
      path: '',
      redirectTo: 'deshboard',
      pathMatch: 'full'
    },
    {
      path:'deshboard',
      component:DeshboardComponent
    },
    {
      path:'empdesh',
      component:EmployeeDeshboardComponent
    },
    {
      path:'clientdesh',
      component:ClientDeshboardComponent
    },
    {
      path:'projectdetails',
      component:ProjectdetailsComponent
      },
      {
        path:'addclient',
        component:AddClientComponent
      },
      {
        path:'addemployee',
        component:AddEmployeeComponent
      },
      {
        path:'addholidya',
        component:AddHolidayComponent
      },
      {
        path:'addpayment',
        component:AddPaymentComponent
      },
      {
        path:'addproject',
        component:AddProjectComponent
      },
      {
        path:'allclient',
        component:AllClientComponent
      },
      {
        path:'allemployee',
        component:AllEmployeeComponent
      },
      {
        path:'allholiday',
        component:AllHolidayComponent
      },
      {
        path:'allLeaveRequest',
        component:AllLeaveRequestComponent
      },
      {
        path:'allpayment',
        component:AllPaymentsComponent
      },
      {
        path:'allproject',
        component:AllProjectComponent
      },
      {
        path:'calender',
        component:CalenderComponent
      },
      {
        path:'candidate',
        component:CandidateComponent
      },
      {
        path:'chat',
        component:ChatComponent
      },
      {
        path:'contect',
        component:ContectComponent
      },
      {
        path:'contectgrid',
        component:ContectGridComponent
      },
      {
        path:'editclient',
        component:EditClientComponent
      },
      {
        path:'editemployee',
        component:EditEmployeeComponent
      },
      {
        path:'editholiday',
        component:EditHolidayComponent
      },
      {
        path:'emailread',
        component:EmailReadMailComponent
      },
      {
        path:'emailcompose',
        component:EmailcomposeComponent
      },
      {
        path:'emailinbox',
        component:EmailinboxComponent
      },
      {
        path:'employeeattendance',
        component:EmployeeAttendanceComponent
      },
      {
        path:'attendanceSheet',
        component:EmployeeAttendanceSheetComponent
      },
      {
        path:'employeeProfile',
        component:EmployeeProfileComponent
      },
      {
        path:'employeeSalary',
        component:EmployeeSalaryComponent
      },
      {
        path:'expenseReport',
        component:ExpenseReportComponent
      },
    {
      path:'invoice',
      component:InvoiceComponent
    },
    {
      path:'joblist',
      component:JobListComponent
    },
    {
      path:'leaveBalence',
      component:LeaveBalanceComponent
    },
    {
      path:'leaveReport',
      component:LeaveReportComponent
    },
    {
      path:'leaveType',
      component:LeaveTypeComponent
    },
    {
      path:'payslip',
      component:PayslipComponent
    },
    {
      path:'projectEstimate',
      component:ProjectEstimatesComponent
    },
    {
      path:'resume',
      component:ResumeComponent
    },
    {
      path:'shortlisted',
      component:ShortListedCandidateComponent
    },
    {
      path:'task',
      component:TaskComponent
    },
    {
      path:'ticketsupport',
      component:TicketSupportComponent
    },
    {
      path:'ticketdetails',
      component:TicketDetailsComponent
    },
    {
      path:'todayAttendance',
      component:TodayAttentanceComponent
    },
    {
      path:'leaders',
      component:LeadersComponent
    },
    {
      path:'inbox',
      component:EmailinboxComponent
    },
    {
      path:'compose',
      component:EmailcomposeComponent
    },
    {
      path:'read',
      component:EmailReadMailComponent
    },
    {
      path:'myproject',
      component:MyProjectComponent
    },
    {
      path:'mytask',
      component:MyTaskComponent
    },
    {
      path:'myteam',
      component:MyTeamComponent
    },
    {
      path:'clientproject',
      component:ClientProjectsComponent
    },
    {
      path:'billing',
      component:BillingComponent
    }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
