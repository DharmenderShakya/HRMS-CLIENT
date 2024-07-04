import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { format } from 'date-fns';
import { DomSanitizer } from '@angular/platform-browser';
import { number } from 'echarts';
declare var window: any;
@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit{
  // @ViewChild('exampleModal') updateModel:ElementRef | any;
  constructor(private employeeService:EmployeeServiceService,private sanitizer: DomSanitizer){}
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  employee:any[]=[];
  mStatus:boolean=true
  updateModel:any;
  employees={
    id:'',
    name:'',
    department:'',
    email:'',
    employe_address:'',
    employee_role:'',
    phone_no:'',
    password:'',
    dateOfBirth:'',
    dateOfJoining:'',
    gender:'',
    image:''
  }
  // saveModel:any;
  ngOnInit(): void {
    this.getAllEmployee();
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }
  openUpdateModel(emp_id:any){
    this.updateModel.show();
    this.employees.id=emp_id;
    this.mStatus=false;
    for (let index = 0; index < this.employee.length; index++) {
      if (this.employees.id==this.employee[index].id) {
        this.employees=this.employee[index];
        console.log("UPdata Employee data",this.employees);
        
      }
    }
  }

  openModel(){
    this.updateModel.show();
    this.mStatus=true;
  }

  closeModel(){
    this.updateModel.hide();
    location.reload();
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];
      console.log("Image data",this.selectedFile);
    }
  }

  postEmployee(){
    const formData: FormData = new FormData();
    if (this.mStatus==false) {
    formData.append('id',this.employees.id);
    }
    if (this.mStatus==false) {
      for (let index = 0; index < this.employee.length; index++) {
        if (this.employees.id==this.employee[index].id) {
          this.employees=this.employee[index];
          console.log("UPdata Employee data",this.employees);
          
        }
      }
    }
    formData.append('name',this.employees.name);
    formData.append('department',this.employees.department);
    formData.append('email',this.employees.email);
    formData.append('employe_address',this.employees.employe_address);
    formData.append('employee_role',this.employees.employee_role);
    formData.append('phone_no',this.employees.phone_no);
    formData.append('password',this.employees.password);
    formData.append('dateOfBirth',this.employees.dateOfBirth);
    formData.append('dateOfJoining',this.employees.dateOfJoining);
    formData.append('gender',this.employees.gender);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    if(this.employees.image){
      formData.append('image',this.employees.image);
    }
    if (this.mStatus==false) {
      this.employeeService.updateEmployees(formData).subscribe((data)=>{
        console.log("employee data",data.image);
      })
    }else{
      this.employeeService.postEmployees(formData).subscribe((data)=>{
        console.log("employee data",data.image);
      })
    }
    if (this.mStatus==false) {
      
    }
    
  }
  getAllEmployee(){
    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
      for (let index = 0; index < data.length; index++) {
        if (this.employee[index].dateOfJoining) {
          this.employee[index].dateOfJoining=format(this.employee[index].dateOfJoining,"mm/dd/yyyy");
        }
        if (this.employee[index].dateOfBirth) {
          this.employee[index].dateOfBirth=format(this.employee[index].dateOfBirth,'mm/dd/yyyy');
        }
      
      }
      
    })
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe((error)=>{
      console.error("the delete apis is not working",error);
      
    }
    )
  }
}


