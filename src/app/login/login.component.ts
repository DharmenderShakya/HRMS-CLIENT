import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
    userName:string="";
    password:string="";
    role:string=''

    admin=true
    employee=false
    client=false

    userName1:string='';
    password1:string='';
    role1:string='';

  sendAdminData(){
    this.admin=true;
    this.employee=false
    this.client=false
    this.userName="jyotiShakya9582@gmail.com";
    this.password="jyoti@123";
    this.role='ADMIN'
  }
  sendEmployeeData(){
    this.employee=true;
    this.admin=false
    this.client=false
    this.userName="muneshShakya1073";
    this.password="jyoti@123";
    this.role= "EMPLOYEE"
  }

  sendClientData(){
    this.client=true;
    this.employee=false
    this.admin=false
    this.userName="dharmenderShakya1073";
    this.password="jyoti@123";
    this.role="CLIENT"
  }

  constructor(private dataService: LoginService,private router:Router) { 
  }

  ngOnInit(): void {
  }
  sendDataForAdmin() {
    this.dataService.setSharedData(this.admin,this.employee,this.client,this.role);
    if(this.role=='ADMIN'){
      this.router.navigate(['deshboard/deshboard'])
    }
    if(this.role=='EMPLOYEE'){
      this.router.navigate(['deshboard/empdesh'])
    }
    if(this.role=='CLIENT'){
      this.router.navigate(['deshboard/clientdesh'])
    }
  }

  // sendDataForEmployee() {
  //   const admin =false
  //   const employee =true
  //   const client =false// Your data
  //   const role ='EMP'
  //   this.dataService.setSharedData(admin,employee,client,role);
  // }
  // sendDataClient() {
  //   const admin =false
  //   const employee =false
  //   const client =true// Your data
  //   const role='CLIENT'
  //   this.dataService.setSharedData(admin,employee,client,role);
  // }

}
