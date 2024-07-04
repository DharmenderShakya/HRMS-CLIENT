import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './full-home/navbar/navbar.component';
import { SidebarComponent } from './full-home/sidebar/sidebar.component';
import { DeshboardComponent } from './full-home/deshboard/deshboard.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayslipComponent } from './payslip/payslip.component';
import { LeadersComponent } from './leaders/leaders.component';
import { ExpenseReportComponent } from './expense-report/ExpenseReportComponent';
import { CandidateComponent } from './Candidates/candidate/candidate.component';
import { JobListComponent } from './Candidates/job-list/job-list.component';
import { ShortListedCandidateComponent } from './Candidates/short-listed-candidate/short-listed-candidate.component';
import { CalenderComponent } from './calender/calender.component';
import {FullCalendarModule } from '@fullcalendar/angular';
import { TaskComponent } from './task/task.component';
import { ChatComponent } from './chat/chat.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { BillingComponent } from './Clients/billing/billing.component';
import { ClientDeshboardComponent } from './Clients/client-deshboard/client-deshboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodayAttentanceComponent } from './Attendance/today-attentance/today-attentance.component';
import { EmployeeAttendanceComponent } from './Attendance/employee-attendance/employee-attendance.component';
import { EmployeeAttendanceSheetComponent } from './Attendance/employee-attendance-sheet/employee-attendance-sheet.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Employees/edit-employee/edit-employee.component';
import { AllEmployeeComponent } from './Employees/all-employee/all-employee.component';
import { EmployeeProfileComponent } from './Employees/employee-profile/employee-profile.component';
import { EmployeeSalaryComponent } from './Employees/employee-salary/employee-salary.component';
import { LeaveReportComponent } from './Leaves/leave-report/leave-report.component';
import { ContectComponent } from './Contects/contect/contect.component';
import { EmailinboxComponent } from './Email/emailinbox/emailinbox.component';
import { EmailcomposeComponent } from './Email/emailcompose/emailcompose.component';
import { EmailReadMailComponent } from './Email/email-read-mail/email-read-mail.component';
import { ContectGridComponent } from './Contects/contect-grid/contect-grid.component';
import { ProjectdetailsComponent } from './Projects/projectdetails/projectdetails.component';
import { AllProjectComponent } from './Projects/all-project/all-project.component';
import { AddProjectComponent } from './Projects/add-project/add-project.component';
import { ProjectEstimatesComponent } from './Projects/project-estimates/project-estimates.component';
import { AllLeaveRequestComponent } from './Leaves/all-leave-request/all-leave-request.component';
import { LeaveBalanceComponent } from './Leaves/leave-balance/leave-balance.component';
import { LeaveTypeComponent } from './Leaves/leave-type/leave-type.component';
import { AllHolidayComponent } from './Holidays/all-holiday/all-holiday.component';
import { AddHolidayComponent } from './Holidays/add-holiday/add-holiday.component';
import { EditHolidayComponent } from './Holidays/edit-holiday/edit-holiday.component';
import { AllClientComponent } from './Clients/all-client/all-client.component';
import { AddClientComponent } from './Clients/add-client/add-client.component';
import { EditClientComponent } from './Clients/edit-client/edit-client.component';
import { FullHomeComponent } from './full-home/full-home.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DeshboardComponent,
    TodayAttentanceComponent,
    EmployeeAttendanceComponent,
    EmployeeAttendanceSheetComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AllEmployeeComponent,
    EmployeeProfileComponent,
    AllProjectComponent,
    AddProjectComponent,
    ProjectEstimatesComponent,
    AllLeaveRequestComponent,
    LeaveBalanceComponent,
    LeaveTypeComponent,
    AllHolidayComponent,
    AddHolidayComponent,
    EditHolidayComponent,
    AllClientComponent,
    AddClientComponent,
    EditClientComponent,
    AllPaymentsComponent,
    AddPaymentComponent,
    InvoiceComponent,
    EmployeeSalaryComponent,
    PayslipComponent,
    LeadersComponent,
    LeaveReportComponent,
    ExpenseReportComponent,
    CandidateComponent,
    JobListComponent,
    ShortListedCandidateComponent,
    CalenderComponent,
    TaskComponent,
    ContectComponent,
    EmailinboxComponent,
    EmailcomposeComponent,
    EmailReadMailComponent,
    ChatComponent,
    ContectGridComponent,
    TicketSupportComponent,
    LayoutComponent,
    ProjectdetailsComponent,
    BillingComponent,
    ClientDeshboardComponent,
    FullHomeComponent,
    MyProjectComponent,
    MyTaskComponent,
    ClientProjectsComponent,
    LoginComponent,
    TeamComponent,
    MyTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), 
   {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
   }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
