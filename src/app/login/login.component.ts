import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user={
    userName:'',
    password:''
  }

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

  constructor(private dataService: LoginService,private router:Router,private toastService:ToastrService) { 
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

loginData(){
  this.dataService.generatTocken(this.user).subscribe((token)=>{
    localStorage.setItem('token',token.accessToken);
    console.log("the tocken"+token);
    this.dataService.setRole(token.roles[0]);
    this.dataService.setUser(token.username);
    
    if (token.roles[0]=='ADMIN') {
      this.router.navigate(['deshboard/deshboard']);
      this.showSuccess();
    }
    if(token.roles[0].match("EMPLOYEE") || token.roles[0].match("LEADER")){
      this.router.navigate(['deshboard/empdesh']);
    }
    if(token.roles[0].match("CLIENT")){
      this.router.navigate(['deshboard/clientdesh']);
    }
    console.log("This is the user name",this.dataService.getUser());
  },(error)=>{
    this.toastService.error('invalid credentials','',{
      timeOut: 1000,
      closeButton: true,
      positionClass:'toast-top-center',
    });
  })
}
showSuccess() {
  this.toastService.success('login successfully', '',
    {
      timeOut: 2000,
      closeButton: true,
      positionClass:'toast-top-center',
    
    }
  );
}
}
