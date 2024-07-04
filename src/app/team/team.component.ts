import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import {IDropdownSettings } from 'ng-multiselect-dropdown';
import { EmployeeServiceService } from '../employee-service.service';
import { Team } from '../models/team';
import { number } from 'echarts';
declare var window: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  updateModel:any
  mStatus:boolean=true
  allTeam:any[]=[]
  leaderName:string=''
  team={
    teamName:'',
    member: [] as string[]
  }

  employee:any[]=[]
  constructor(private teamService:TeamService,private employeeService:EmployeeServiceService){

  }
  ngOnInit(): void {
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );

    this.employeeService.getEmployeeList().subscribe((data)=>{
      this.employee=data;
      console.log("employee name",data[0].employee_role);
      // for (let index = 0; index < data.length; index++) {
      //   if (data[index].employee_role.toUpperCase().includes("ADMIN") || data[index].employee_role.toUpperCase().includes("MANAGER") ||
      //   data[index].employee_role.toUpperCase().includes("HR") || data[index].employee_role.toUpperCase().includes("LEADER")
      // ) {     
        
      
    // }
        
    //   }
    
    });
    this.getAllTeam();
  }

  openModel(){
    this.updateModel.show();
    this.mStatus=true;
  }
  closeModel(){
    this.updateModel.hide();
  }

  getAllTeam(){
    this.teamService.getAllTeam().subscribe((data)=>{
      this.allTeam=data;
      
    })
  }

  openUpdateModel(id:any){
    this.updateModel.show();
    this.mStatus=false;
  }
  createTeam(){
    this.team.member.push(this.leaderName);
    this.teamService.createTeam(this.team).subscribe((err)=>{
      console.log(err);
      
    })
  }

  toggleSelection(name: any) {
    const index = this.team.member.indexOf(name);
    if (index === -1) {
      this.team.member.push(name);
    } else {
      this.team.member.splice(index, 1);
    }
  }

  isSelected(name: any): boolean {
    return this.team.member.includes(name);
  }

  getSelectedCount(): number {
    return this.team.member.length;
  }

}
