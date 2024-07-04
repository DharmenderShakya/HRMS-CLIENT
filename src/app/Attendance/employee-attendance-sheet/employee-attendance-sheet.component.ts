import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-attendance-sheet',
  templateUrl: './employee-attendance-sheet.component.html',
  styleUrls: ['./employee-attendance-sheet.component.css']
})
export class EmployeeAttendanceSheetComponent implements OnInit{

  numberOfDays: number[]=[];
   nameOfDay:string='';
  attandence:any[]=[]
  constructor(){

  }

  ngOnInit(): void {
     
     console.log("get this days"+this.getDaysInCurrentMonth(new Date()));
     
  }
   getDaysInCurrentMonth(date:Date){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const days=new Date(year, month,0).getDate();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let a=1;a<=days;a++){
      const date = new Date(year, month,0);
      this.numberOfDays.push(a);
    }
    if (date==now) {
      this.nameOfDay=dayNames[now.getDay()];
    }
    // return now.getDay();
    return dayNames[now.getDay()];
  }
  

}
