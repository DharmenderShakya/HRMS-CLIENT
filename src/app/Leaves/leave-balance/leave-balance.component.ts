import { Component, OnInit } from '@angular/core';
import { number } from 'echarts';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { LeaveServiceService } from 'src/app/leave-service.service';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {

  employee:any[]=[];
  leaveBalence={
    name:'',
    previous:number,
    current:number,
    total:number,
    used:number,
    accepted:number,
    rejected:number,
    expired:number,
    carry:number
  }
  allLeaveBalence:any[]=[];

  constructor(private employeeService:EmployeeServiceService,private leaveservice:LeaveServiceService){

  }

  ngOnInit(): void {
   this.getAllEmployee();
   this.getAllBalance();   
  }

  getAllBalance(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.allLeaveBalence=data;
      // console.log("Employee data",this.employee.name);
    })
  }

  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
    })
  }


  postLeaveBalence(){
    this.leaveservice.postLeaveBalence(this.leaveBalence).subscribe((data)=>{
      console.log(data);
    })
  }


}
