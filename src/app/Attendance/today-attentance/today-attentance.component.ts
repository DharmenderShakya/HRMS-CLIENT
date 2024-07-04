import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/attendance.service';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-today-attentance',
  templateUrl: './today-attentance.component.html',
  styleUrls: ['./today-attentance.component.css']
})
export class TodayAttentanceComponent implements OnInit{
  isVisibleStatus='ABSENT';
  status:string[]=[
    "PRESENT",
    "ABSENT"
  ]
  shift:string[]=[
    "DAY SHIFT",
    "NIGHT SHIFT"
  ]
  employee_name:any[]=[]
attendance={
  name:'',
  in:'',
  out:'',
  lunch_break:'',
  total:'',
  status:'',
  shift:''
}
employee:any[]=[]
attendanceData:any[]=[]

  constructor(private attendanceService:AttendanceService,private employeeService:EmployeeServiceService){

  }
  ngOnInit(): void {
    this.getEmployee();
    this.getEmployeeAttendance();
  }

  postAttendance(){
    this.attendanceService.postAttendance(this.attendance).subscribe((data)=>{
      console.log(data);
      
    })
  }

  getEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
      this.employee_name=this.employee;
      console.log("empluee name",this.employee_name);
    })
  }

  getEmployeeAttendance(){
    this.attendanceService.getAllTodayAttedence().subscribe((data)=>{
      this.attendanceData=data;
      console.log(data);
      
    })
  }


}
