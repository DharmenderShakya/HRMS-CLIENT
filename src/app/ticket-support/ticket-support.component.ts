import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { TaskService } from '../task.service';
import { tick } from '@angular/core/testing';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-ticket-support',
  templateUrl: './ticket-support.component.html',
  styleUrls: ['./ticket-support.component.css']
})
export class TicketSupportComponent implements OnInit {

  creatTask={
    project:'',
    assign_By:'',
	  type:'',
	  status:'',
	  priority:'',
	  assign_To:'',
	  date:'',
	  details:''
  }
  allticket:any[]=[];

  constructor(private taskService:TaskService,private loginService:LoginService){

  }

  ngOnInit(): void {
    // this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
    //   this.taskService.getTicketByCreater(data.firstName).subscribe((data)=>{
    //     this.allticket=data;
    //   })
    // })
    this.taskService.getTicketByCreater("kapil").subscribe((data)=>{
      this.allticket=data;
    })
  }
  addTask(){
    this.taskService.createTask(this.creatTask).subscribe((err)=>{
      console.log(err);
      
    })
  }

}
