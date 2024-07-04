import { Component } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  isVisibleStatus='OPEN';
  isVisibleType='FULLTIME';
  constructor(private jobservice:JobServiceService){}
  jobs:any[]=[];
  createJob={
    title:'',
    department:'',
    role:'',
    vacancies:'',
    date:'',
    status:'',
    jobType:''
  }
  ngOnInit(): void {
    this.getAllJobs();
  }
  getAllJobs(){
    this.jobservice.getJobList().subscribe((data)=>{
      this.jobs=data;
    })
  }

  createJobe(){
    this.jobservice.postJobs(this.createJob).subscribe((err)=>{
      console.log(err);
      
    })
  }
}
