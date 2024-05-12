import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';
import { AllProjectComponent } from '../all-project/all-project.component';
import { ProjectEstimatesComponent } from '../project-estimates/project-estimates.component';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';

const routes: Routes = [
  { path: 'addproject', component:AddProjectComponent },
  { path: 'allproject', component:AllProjectComponent },
  { path: 'projectestimates', component: ProjectEstimatesComponent },
  { path: 'projectdetails', component: ProjectdetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectsRoutingModule { }
