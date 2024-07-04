import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  image:any;
  name:any;

  constructor(private loginservice: LoginService,private employeeService:EmployeeServiceService) {}
  role:any;

  ngOnInit(): void {
    this.role=this.loginservice.getSharedRole();
    this.loginservice.getCurrentUserName(this.loginservice.getUser()).subscribe((data)=>{
      this.name=data.firstName;
      this.employeeService.getEmployeeByName(data.firstName).subscribe((employee)=>{
        this.image=employee.image;
        console.log("this is the employee image",this.image);
        
      })
    })
  }

  

}
