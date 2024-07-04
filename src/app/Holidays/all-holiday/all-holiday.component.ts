import { Component } from '@angular/core';
import { format } from 'date-fns';
import { HolidyServiceService } from 'src/app/holidy-service.service';
declare var window: any;

@Component({
  selector: 'app-all-holiday',
  templateUrl: './all-holiday.component.html',
  styleUrls: ['./all-holiday.component.css']
})
export class AllHolidayComponent {

  constructor(private holidayService:HolidyServiceService){}
  employeeHolidays:any[]=[];
  mStatus:boolean=true;
  updateModel:any;
  addUpdateHoliday={
    id:'',
    name:'',
    holidayDate:'',
    location:'',
    shift:'',
    details:''
  }
  ngOnInit(): void {
    this.getAllHoliday();
    this.updateModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
  }

  openUpdateModel(emp_id:any){
    this.updateModel.show();
    this.addUpdateHoliday.id=emp_id;
    this.mStatus=false;
    for (let index = 0; index < this.employeeHolidays.length; index++) {
      if (this.addUpdateHoliday.id==this.employeeHolidays[index].id) {
        this.addUpdateHoliday=this.employeeHolidays[index];
        console.log("UPdata Employee data",this.addUpdateHoliday);
        
      }
    }
  }

  closeModel(){
    this.updateModel.hide();
    location.reload();
  }

  getAllHoliday(){
    this.holidayService.getHolidaysList().subscribe((data)=>{
      this.employeeHolidays=data;
      for (let index = 0; index < data.length; index++) {
        if(data!=undefined){
          this.employeeHolidays[index].holidayDate=format(this.employeeHolidays[index].holidayDate,'dd/mm/yyyy');
        }
      }
      
    })
  }

  updateRequest(){
    if (this.mStatus==false && this.addUpdateHoliday.id!=undefined) {
      this.holidayService.updateHoliday(this.addUpdateHoliday).subscribe((err)=>{
        console.log(err);
        
      })
      }else{
    this.holidayService.addHoliday(this.addUpdateHoliday).subscribe((err)=>{
      console.log(err);
      // console.log("posted Request data",data);
    })
  }
  }

}
