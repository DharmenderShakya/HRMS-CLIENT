import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidyServiceService {
  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getHolidaysList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllHoliday`);
  }

  addHoliday(holiday:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/postholiday`,holiday);
  }
  updateHoliday(holiday:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/putholiday`,holiday);
  }

  postEmployees(employee:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/`,employee);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
