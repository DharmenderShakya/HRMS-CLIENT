import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {


  employee:any[]=[]

  constructor(private employeeService:EmployeeServiceService){
    
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
    })
  }


}
