import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  teams:any[]=[]
  name:any;

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    this.loginService.getTeamMember(this.loginService.getUser()).subscribe((data:any)=>{
    this.teams=data.employee
    console.log("this is the team",this.teams);
    
    })
  }



}
