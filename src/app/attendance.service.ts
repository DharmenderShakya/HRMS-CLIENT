import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8083/hrms";


  postAttendance(attendance:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/postAttendance`,attendance);
  }

  getAllTodayAttedence():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllAttendence`)
  }
}
