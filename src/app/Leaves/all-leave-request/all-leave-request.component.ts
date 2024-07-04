import { Component, OnInit } from '@angular/core';
import { number } from 'echarts';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { LeaveServiceService } from 'src/app/leave-service.service';
declare var window: any;  
@Component({
  selector: 'app-all-leave-request',
  templateUrl: './all-leave-request.component.html',
  styleUrls: ['./all-leave-request.component.css']
})
export class AllLeaveRequestComponent implements OnInit {
  
status:string[]=[
  "ACCEPTED",
  "REJECTED"
]
  employee:any[]=[];
  leaveType:any[]=[];
  request:any[]=[];
  mStatus:boolean=true;
  updateModel:any;
  leavaeRequest={
    id:'',
    name:'',
    leaveType:'',
    from:'',
    to:'',
    reason:'',
    leaveDays:'',
    status:''
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllLeaveType();
    this.getAllRequest();
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
  constructor(private employeeService:EmployeeServiceService,private leaveService:LeaveServiceService){

  }
  isVisibleStatus='APPROVED';

  openUpdateModel(emp_id:any){
    this.updateModel.show();
    this.leavaeRequest.id=emp_id;
    this.mStatus=false;
    for (let index = 0; index < this.request.length; index++) {
      if (this.leavaeRequest.id==this.request[index].id) {
        this.leavaeRequest=this.request[index];
        console.log("UPdata Employee data",this.leavaeRequest);
        
      }
    }
  }

  closeModel(){
    this.updateModel.hide();
    location.reload();
  }

  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
    })
  }
  getAllLeaveType(){
    this.leaveService.getAllLeaveType().subscribe((data)=>{
      this.leaveType=data;
    })
  }

  leaveRequest(){
    if (this.mStatus==false && this.leavaeRequest.id!=undefined) {
      this.leaveService.leaveUpdate(this.leavaeRequest).subscribe((err)=>{
        console.log(err);
        
      })
      }else{
    this.leaveService.leaveRequest(this.leavaeRequest).subscribe((err)=>{
      console.log(err);
      // console.log("posted Request data",data);
    })
  }
  }

  getAllRequest(){
    this.leaveService.getAllLeaveRequest().subscribe((data)=>{
      this.request=data;
      console.log("leave Request data",this.request);
      
    })
  }

}
