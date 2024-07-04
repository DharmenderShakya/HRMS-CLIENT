import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { JobServiceService } from 'src/app/job-service.service';
declare var window: any;
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  isVisibleType=true
  constructor(private jobservice:JobServiceService,private route:ActivatedRoute){}

  selectedFile: File | null = null;

  selectedImage: File | null = null;
  updateModel:any;
  candidates:any[]=[]
  jobs={
    
      id:0,
      employeeName: '',
      title: '',
      department:'',
      role: '',
      jobType: '',
      vacancies: '',
      status: '',
      date: '',
      
  }
  createCandidate={
    jobtitle:'',
    status:'',
    jobType:'', 
    role:'',
    name:'',
    email:'',
    mobile:'',
  }
  jobId:any;
  ngOnInit(): void {
    this.getAllCandidate();
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      this.fetchEmployeeId(this.jobId);
  });
  this.updateModel = new window.bootstrap.Modal(
    document.getElementById("exampleModal")
  );
  }
  openModel(id:any){
    this.updateModel.show();
    this.isVisibleType=false;
    this.jobservice.getCandidateById(id).subscribe((data)=>{
      this.createCandidate=data;
      console.log("candidate email type",this.createCandidate.email);
      
    })
  }
  closeModel(){
    this.updateModel.hide();
    location.reload();
  }

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedImage = fileInput.files[0];
      // console.log("Image data",this.selectedFile);
    }
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedFile = fileInput.files[0];
      // console.log("Image data",this.selectedFile);
    }
  }

  fetchEmployeeId(id:number){
    this.jobservice.getJobsById(3).subscribe((data)=>{
      this.jobs=data;
      this.createCandidate.jobtitle=this.jobs.title;
      this.createCandidate.role=this.jobs.role;
      this.createCandidate.jobType=this.jobs.jobType;
      
    })
  }

  
  

  getAllCandidate(){
    this.jobservice.getCandidateList().subscribe((data)=>{
      this.candidates=data;
      // console.log("this is the name of employee",data.name);
      
    })
  }

  addCandidate(){
    const formData:FormData =new FormData();
    formData.append('name',this.createCandidate.name);
    formData.append('email',this.createCandidate.email);
    formData.append('mobile',this.createCandidate.mobile);
    formData.append('role',this.createCandidate.role);
    formData.append('jobType',this.createCandidate.jobType);
    formData.append('jobtitle',this.createCandidate.jobtitle);
    if (this.createCandidate.status==undefined) {
      formData.append('status',"Wait".toUpperCase());
    }
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.jobservice.addCandidate(formData).subscribe((err)=>{
      console.log(err);
      
    })
  }
  updateCandidate(){
    this.jobservice.updateCandidate(this.createCandidate).subscribe((err)=>{
      console.log(err);
      
    })
  }
}
