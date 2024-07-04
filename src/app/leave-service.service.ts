import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveServiceService {
  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getLeaveType():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllLeaveType`);
  }

  postEmployees(employee:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/leaveType/`,employee);
  }

  leaveRequest(request:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/leaveRequest`,request);
  }
  leaveUpdate(update:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/updateRequest`,update);
  }
  getAllLeaveRequest():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllLeaveRequest`)
  }

  getLeaveTypeById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getTypeById/${id}`);
  }

  getAllLeaveType():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllLeaveType`)
  }

  postLeaveBalence(balance:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/leaveBalence`,balance);
  }
  getallbalence():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllLeaveBalence`);
  }
}
