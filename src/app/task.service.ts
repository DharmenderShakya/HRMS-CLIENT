import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl="http://localhost:8083/hrms";

  constructor(private httpClient:HttpClient) { }

createTask(task:any):Observable<any>{
  return this.httpClient.post(`${this.baseUrl}/addTicket`,task)
}

getAllTicket():Observable<any>{
  return this.httpClient.get(`${this.baseUrl}/getAllTicket`);
}

getTicketByCreater(name:any):Observable<any>{
  return this.httpClient.get(`${this.baseUrl}/getCreatedBy/${name}`)
}

}
