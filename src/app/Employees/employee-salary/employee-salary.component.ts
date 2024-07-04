import { Component, OnInit } from '@angular/core';
import { number } from 'echarts';
import { EmployeeServiceService } from 'src/app/employee-service.service';
declare var window: any; 
@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {

employeeSalary={
  id:'',
  name:'',
  email:'',
  department:'',
  role:'',
  employee_salary:'',
  status:'',
}
employee:any[]=[];
updateModel:any;
salary:any[]=[];
mStatus:boolean=true;

  constructor(private employeeService:EmployeeServiceService){

  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getsalary();
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openUpdateModel(emp_id:any){
    this.updateModel.show();
    this.employeeSalary.id=emp_id;
    this.mStatus=false;
    for (let index = 0; index < this.salary.length; index++) {
      if (this.employeeSalary.id==this.salary[index].id) {
        this.employeeSalary=this.salary[index];
        console.log("UPdata Employee data",this.employeeSalary);
        
      }
    }
  }

  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
    })
  }
  getsalary(){
    this.employeeService.getSalary().subscribe((data)=>{
      this.salary=data
    })
  }

  updateSalaryRequest(){
    if (this.mStatus==false && this.employeeSalary.id!=undefined) {
      this.employeeService.updateSalary(this.employeeSalary).subscribe((err)=>{
        console.log(err);
        
      })
      }else{
    this.employeeService.addSalary(this.employeeSalary).subscribe((err)=>{
      console.log(err);
      // console.log("posted Request data",data);
    })
  }
  }


}
