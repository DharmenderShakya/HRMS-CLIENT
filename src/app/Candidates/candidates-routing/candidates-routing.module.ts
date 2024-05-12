import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { JobListComponent } from '../job-list/job-list.component';
import { ResumeComponent } from '../resume/resume.component';
import { ShortListedCandidateComponent } from '../short-listed-candidate/short-listed-candidate.component';
import { CandidateComponent } from '../candidate/candidate.component';

const routes: Routes = [
  { path: 'candidate', component:CandidateComponent },
  { path: 'job-list', component:JobListComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'sort-listen-candidates', component: ShortListedCandidateComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CandidatesRoutingModule { }
