import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getEstimateList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllEstimates`);
  }

  postProject(addProject:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/addProject`,addProject);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  createEstimateProject(project:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/addestimates`,project);
  }

  getProjectByClientName(name:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/client/${name}`);
  }

}
