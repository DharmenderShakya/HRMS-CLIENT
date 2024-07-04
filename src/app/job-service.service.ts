import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private baseUrl="http://localhost:8083/hrms"
  constructor(private httpClient:HttpClient) { }

  getJobList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllJobs`);
  }

  postJobs(jobs:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/jopost`,jobs);
  }

  getJobsById(id:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getJob/${id}`);
  }
  addCandidate(candidate:any){
    return this.httpClient.post(`${this.baseUrl}/cpost`,candidate); 
  }

  updateCandidate(candidate:any){
    return this.httpClient.put(`${this.baseUrl}/updateCandidate`,candidate); 
  }

  getCandidateList():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getAllCandidate`);
  }
  getCandidateById(id:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getCandidate/${id}`);
  }
}
