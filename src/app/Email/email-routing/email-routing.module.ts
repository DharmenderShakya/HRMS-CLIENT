import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmailcomposeComponent } from '../emailcompose/emailcompose.component';
import { EmailinboxComponent } from '../emailinbox/emailinbox.component';
import { EmailReadMailComponent } from '../email-read-mail/email-read-mail.component';

const routes: Routes = [
  { path: 'emailCompose', component:EmailcomposeComponent },
  { path: 'all-emailinbox', component:EmailinboxComponent },
  { path: 'readmail', component: EmailReadMailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmailRoutingModule { }
