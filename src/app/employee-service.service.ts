import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  EmployeeServiceService {

  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getEmployeeDetails`);
  }

  postEmployees(employee:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/addEmployee`,employee);
  }

  updateEmployees(employee:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/updateEmployee`,employee);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getById/${id}`);
  }

  addLeaders(leader:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/postLeaders`,leader);
  }

  addSalary(salary:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/addSalary`,salary);
  }
  updateSalary(salary:any):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/updateSalary`,salary);
  }
  getSalary():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getSalary`);
  }
  deleteEmployee(id:number):Observable<any>{
    console.log("employee id data------------",id);
    return this.httpClient.delete(`${this.baseUrl}/deleteEmployee/${id}`);
    
  }
  getEmployeeByName(name:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getEmployeeByName/${name}`)
  }

}
