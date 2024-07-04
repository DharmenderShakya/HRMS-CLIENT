import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { LoginService } from 'src/app/login.service';
import { ProjectServiceService } from 'src/app/project-service.service';

@Component({
  selector: 'app-project-estimates',
  templateUrl: './project-estimates.component.html',
  styleUrls: ['./project-estimates.component.css']
})
export class ProjectEstimatesComponent implements OnInit{

  constructor(private projectService:ProjectServiceService,private loginService:LoginService){}
  estimates:any[]=[];
  status:string[]=[];
  isVisible = false;
  isVisibleStatus='';
  role:any;
  ngOnInit(): void {
    this.getAllEstimates();
    this.role=this.loginService.getSharedRole();
  }
  getAllEstimates(){
    this.projectService.getEstimateList().subscribe((data)=>{
      this.estimates=data;
      for (let index = 0; index < data.length; index++) {
        console.log("data status"+this.estimates[index].type)
        // this.status[index]=this.estimates[index].status;
        this.estimates[index].createDate= format(this.estimates[index].createDate,'MM/dd/yyyy');
        if (data.status==undefined) {
          this.estimates[index].status='NULL';
          this.isVisible=true;
        }
        if (data.status!=undefined) {
          this.isVisibleStatus=this.estimates[index].status;
        }
        
      }
    })
  }
  
}
