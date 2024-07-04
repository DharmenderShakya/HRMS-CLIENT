import { Component, OnInit } from '@angular/core';
import Quill from 'quill';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { ProjectServiceService } from 'src/app/project-service.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{

estimates:any[]=[]
project={
  name:'',
  startDate:Date,
  endDate:Date,
  project_Deparment:'',
  priority:'',
  projectDescription:'',
  teamLeader:'',
  client:'',
  status:'',
  price:''
}
employee:any[]=[];
priority:string[]=[
  "Choose Priority",
  "High","Low","Medium"
];

  constructor(private projectservice:ProjectServiceService,private employeeService:EmployeeServiceService){}
  ngOnInit(): void {
    this.getAllemployee();
    this.getEstimatesProject();
    const quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    });
  }

  getEstimatesProject(){
    this.projectservice.getEstimateList().subscribe((data)=>{
      this.estimates=data;
      console.log(this.estimates);
      
      
    })
  }

  addProject(){
  this.projectservice.postProject(this.project).subscribe((data)=>{

})

  }

  getAllemployee(){
    this.employeeService.getEmployeeList().subscribe((data:any[])=>{
      this.employee=data.filter(employee => employee.employee_role.toUpperCase().includes("ADMIN") || employee.employee_role.match("MANAGER")
    || employee.employee_role.toUpperCase().includes("HR") || employee.employee_role.toUpperCase().includes("LEADER"));
      this.employee.forEach(emp=>{
        
      })
      console.log("Leaders data", this.employee);
    });
    
  }
  

}
