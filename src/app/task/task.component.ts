import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { LoginService } from '../login.service';
import { EmployeeServiceService } from '../employee-service.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  userRole=''
  creatTask={
    project:'',
    createdBy:'',
	  type:'',
	  status:'',
	  priority:'',
	  assign_To:'',
	  date:'',
	  details:''
  }
  task:any[]=[]

  // employee:any[]=[]

  // team:any[]=[]

  // employeeRole:any

  taskTo:any[]=[]

  constructor(private taskService:TaskService,private loginService:LoginService,private employeeService:EmployeeServiceService
    ,private teamService:TeamService
  ){

  }
  ngOnInit(): void {
    this.getAllTask();
    this.userRole=this.loginService.getSharedRole();

    if (this.loginService.getSharedRole()=="ADMIN") {
      this.teamService.getAllTeam().subscribe((data)=>{
        this.taskTo=data;
      });
    }
    if (this.loginService.getSharedRole()=="LEADER") {
      this.employeeService.getEmployeeList().subscribe((data:any[])=>{
        this.taskTo=data.filter(employee => employee.employee_role.toUpperCase().includes("ADMIN") || employee.employee_role.match("MANAGER")
    || employee.employee_role.toUpperCase().includes("HR") || employee.employee_role.toUpperCase().includes("LEADER"));
      this.taskTo.forEach(emp=>{
        // this.role.add(emp.role);
      })
      console.log("Leaders data", this.taskTo);
      });
    }
  }
  
  addTask(){
    this.creatTask.createdBy=this.loginService.getUser();
    this.taskService.createTask(this.creatTask).subscribe((err)=>{
      console.log(err);
      
    })
  } 

  getAllTask(){
    this.taskService.getAllTicket().subscribe((data)=>{
      this.task=data;
    })
  }

}
