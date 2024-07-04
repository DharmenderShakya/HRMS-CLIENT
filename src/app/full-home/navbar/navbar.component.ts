import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  
  constructor(private loginService:LoginService,private router:Router,private employeeService:EmployeeServiceService){

  }
  image:any;
  name:any;

  
  role:any;

  ngOnInit(): void {
    this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
      this.name=data.firstName;
      this.employeeService.getEmployeeByName(data.firstName).subscribe((employee)=>{
        if (this.loginService.getSharedRole()!='ADMIN' || this.loginService.getSharedRole()!='LEADER') {
          this.role=employee.employee_role;
        }else{
          this.role=this.loginService.getSharedRole();
        }
        this.image=employee.image;
        console.log("this is the employee image",this.image);
        
      })
    })
  }


  userLogOut(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }

}
