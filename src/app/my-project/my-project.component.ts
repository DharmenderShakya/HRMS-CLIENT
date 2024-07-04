import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ProjectServiceService } from '../project-service.service';
declare var window: any;
@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {

  allTeam:any[]=[];
  name:any;
  role:any;
  updateModel:any;
  createProject={

    projectName:'',
	
	  type:'',
	
	  openTask:'',
	
	  leadName:'',
	
	  clientName:'',
	
	  progress:'',
	
	  status_By_Client:'',
	
	  lastModify:'',
	
	  createDate:'',
	
	  country:'',
	
	  status_By_Employee:'',

    details:''

  }

  constructor(private loginService:LoginService,private projectService:ProjectServiceService){

  }

  ngOnInit(): void {
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );

    this.role=this.loginService.getSharedRole();
    if (this.role!='CLIENT') {
      this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
        this.loginService.getTeamMember(data.firstName).subscribe((leadProject)=>{
          this.allTeam=leadProject;
          console.log("this is the Leader project by client name",this.allTeam);
          
        })
      })
    }else{
      this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
        this.projectService.getProjectByClientName(data.firstName).subscribe((clientProject)=>{
          this.allTeam=clientProject;
          console.log("this is the project by client name",this.allTeam);
          
        })
      })
    }
    
    this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
      console.log("this is the current user name",data);
      this.createProject.clientName=data.firstName;
    })
  }

  openModel(){
    this.updateModel.show();
  }

  addProject(){
    this.projectService.createEstimateProject(this.createProject).subscribe((err)=>{
      console.log("this is the error of the project",err);
      
    })
  }

  // getProjetByClientName(){
  //   this.loginService.getCurrentUserName(this.loginService.getUser()).subscribe((data)=>{
  //     this.projectService.getProjectByClientName(data.firstName).subscribe((clientProject)=>{
  //       this.project=clientProject;
  //       console.log("this is the project by client name",clientProject);
        
  //     })
  //   })
    
  // }

}
