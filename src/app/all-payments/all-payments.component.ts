import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';
import { EmployeeServiceService } from '../employee-service.service';
declare var window: any;
@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {


  allClient:any[]=[]
  allEmployee:any[]=[]
  mStatus:boolean=true;
  updateModel:any;
  allPayment:any[]=[]
  postPayment={
    id:'',
    client_Name:'',
    employee_Name:'',
    charges:'',
    date:'',
    tax:'',
    discount:'',
    total:''
  }

  constructor(private clientService:ClientServiceService,private employeeService:EmployeeServiceService){

  }

  ngOnInit(): void {
   this.getAllClient();
   this.getAllEmployee();
   this.getAllPayment();
   this.updateModel = new window.bootstrap.Modal(
    document.getElementById("exampleModal")
  );
  }

  openUpdateModel(emp_id:any){
    this.updateModel.show();
    this.postPayment.id=emp_id;
    this.mStatus=false;
    for (let index = 0; index < this.allPayment.length; index++) {
      if (this.postPayment.id==this.allPayment[index].id) {
        this.postPayment=this.allPayment[index];
        console.log("UPdata Employee data",this.postPayment);
        
      }
    }
  }

  getAllClient(){
    this.clientService.getClientList().subscribe((data)=>{
      this.allClient=data;
    })
  }
  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.allEmployee=data;
    })
  }

  paymentRequest(){
    if (this.mStatus==false && this.postPayment.id!=undefined) {
      this.clientService.updatePayment(this.postPayment).subscribe((err)=>{
        console.log(err);
        
      })
      }else{
    this.clientService.addPayment(this.postPayment).subscribe((err)=>{
      console.log(err);
      // console.log("posted Request data",data);
    })
  }
  }
  getAllPayment(){
    this.clientService.getAllPayment().subscribe((data)=>{
      this.allPayment=data;
      console.log("client payment data",this.allPayment);
      
    })
  }

}
