import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {
private baseUrl="http://localhost:8083/hrms";

constructor(private httpClient:HttpClient) { }

createExpence(expence:any){
  return this.httpClient.post(`${this.baseUrl}/postExpence`,expence)
}
getAllExpense(){
  return this.httpClient.get(`${this.baseUrl}/`);
}
}
