import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-full-home',
  templateUrl: './full-home.component.html',
  styleUrls: ['./full-home.component.css']
})
export class FullHomeComponent implements OnInit {

  admin:any;
  employee:any;
  client:any;
  role:any;

  constructor(private dataService:LoginService){

  }

  ngOnInit(): void {

    this.admin=this.dataService.getSharedAdmin();
    this.employee=this.dataService.getSharedEmployee();
    this.client = this.dataService.getSharedClient();
    this.role = this.dataService.getSharedRole();

    }



}
