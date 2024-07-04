import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/client-service.service';

@Component({
  selector: 'app-all-client',
  templateUrl: './all-client.component.html',
  styleUrls: ['./all-client.component.css']
})
export class AllClientComponent implements OnInit{

  constructor(private clinetService:ClientServiceService){}
  clientStatus='NEW'
  clients:any[]=[];
  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient(){
    this.clinetService.getClientList().subscribe((data)=>{
      this.clients=data;
    })
  }

}
