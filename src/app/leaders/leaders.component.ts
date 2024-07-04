import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import {IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit{

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:IDropdownSettings = {};

  leader={
    name:'',
    department:'',
    role:'',
    project:'',
    mobile:'',
    email:''
  }

  // role:Set<string>[]=[]
  role: Set<string> = new Set<string>();

  employee:any[]=[];

  constructor(private employeeService:EmployeeServiceService){

  }
  ngOnInit(): void {
      this.getAllemployee();
      this.dropdownList = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
      ];
      this.selectedItems = [
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' }
      ];

      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
      };
  }

  addLeaders(){
    this.employeeService.addLeaders(this.leader).subscribe((data)=>{
    })
  }

  getAllemployee(){
    this.employeeService.getEmployeeList().subscribe((data:any[])=>{
      this.employee=data.filter(employee => employee.employee_role.toUpperCase().includes("ADMIN") || employee.employee_role.match("MANAGER")
    || employee.employee_role.toUpperCase().includes("HR") || employee.employee_role.toUpperCase().includes("LEADER"));
      this.employee.forEach(emp=>{
        this.role.add(emp.role);
      })
      console.log("Leaders data", this.employee);
    });
    
  }

  // getAllemployee() {
  //   this.employeeService.getEmployeeList().subscribe((data: any[]) => {
  //     // Assuming data is an array of employees
  //     this.employee = data.filter(employee => employee.employee_role === "team leader");
  //     console.log("Leaders data", this.employee);
  //   });
  // }
  

}
