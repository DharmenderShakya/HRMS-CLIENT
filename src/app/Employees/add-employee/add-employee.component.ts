import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;


employee={
  name:'',
  department:'',
  email:'',
  employe_address:'',
  employee_role:'',
  phone_no:'',
  password:'',
  dateOfBirth:Date,
  dateOfJoining:Date,
  gender:''
}

employees: any[] = [];
  sanitizer: any;

constructor(private empService:EmployeeServiceService){

}

ngOnInit(): void {

  this.empService.getEmployeeList().subscribe(
    (employees: any[]) => {
      this.employees = employees;
      this.employees.forEach(employee => {
        if (employee.image) {
          employee.imageUrl = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${employee.image}`);
        }
      });
    },
    (error) => {
      console.error('Error loading employees', error);
    }
  );
  
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
  formData.append('name',this.employee.name);
  formData.append('department',this.employee.department);
  formData.append('email',this.employee.email);
  formData.append('employe_address',this.employee.employe_address);
  formData.append('employee_role',this.employee.employee_role);
  formData.append('phone_no',this.employee.phone_no);
  formData.append('password',this.employee.password);
  formData.append('dateOfBirth',this.employee.dateOfBirth.toString());
  formData.append('dateOfJoining',this.employee.dateOfJoining.toString());
  formData.append('gender',this.employee.gender);
  if (this.selectedFile) {
    formData.append('file', this.selectedFile);
  }
  this.empService.postEmployees(formData).subscribe((data)=>{
    console.log("employee data",data.image);
    
  })
}

}
