import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { an } from '@fullcalendar/core/internal-common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  
  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getClientList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/allclient`);
  }

  postClient(client:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/client`,client);
  }

  getClientById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/clientById/${id}`);
  }
  addPayment(payment:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/post`,payment);
  }
  updatePayment(payment:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/updatePayment`,payment);
  }
  getAllPayment():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllPayment`);
  }
  getPaymentByClinetName(name:any){
    return this.httpClient.get(`${this.baseUrl}/getPayment/${name}`);
  }
}
