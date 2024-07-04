import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-contect-grid',
  templateUrl: './contect-grid.component.html',
  styleUrls: ['./contect-grid.component.css']
})
export class ContectGridComponent implements OnInit {

  allcontect:any[]=[]

  constructor(private employeeservice:EmployeeServiceService){

  }

  ngOnInit(): void {
    this.getAllContects();
  }

  getAllContects(){
    this.employeeservice.getEmployeeList().subscribe((data)=>{
      this.allcontect=data;
    })
  }

}
