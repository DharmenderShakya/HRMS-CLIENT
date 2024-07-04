import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshboardComponent } from 'src/app/full-home/deshboard/deshboard.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  { path: 'navbar', component:NavbarComponent },
  { path: 'sidebar', component:SidebarComponent },
  { path: '', component: DeshboardComponent },
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeRoutingModule { }
