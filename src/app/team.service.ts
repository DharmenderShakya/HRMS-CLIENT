import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl="http://localhost:8083/hrms";

  constructor(private httpClient:HttpClient) { }

  getAllTeam():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/getTeam`);
  }

  createTeam(team:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/postTeam`,team);
  }
}
