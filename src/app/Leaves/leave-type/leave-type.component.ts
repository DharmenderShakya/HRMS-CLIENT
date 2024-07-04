import { Component } from '@angular/core';
import { LeaveServiceService } from 'src/app/leave-service.service';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent {

  constructor(private leaveService:LeaveServiceService){}
  leaveType:any[]=[];
  ngOnInit(): void {
    this.getAllLeaveType();
  }
  getAllLeaveType(){
    this.leaveService.getLeaveType().subscribe((data)=>{
      this.leaveType=data;
    })
  }

}
