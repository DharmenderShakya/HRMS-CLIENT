import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginservice: LoginService) {}
  role:any;

  ngOnInit(): void {
    this.role=this.loginservice.getSharedRole();
  }

  

}
