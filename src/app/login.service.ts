import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { use } from 'echarts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl="http://localhost:8083/auth";
  constructor(private httpClient:HttpClient) { }

  private admin: any;
  private employee: any;
  private client: any;
  private readonly ROLE_KEY = 'user_role';

  setSharedData(admin:any,employee:any,client:any,role:any) {
    this.admin = admin;
    this.employee = employee;
    this.client = client;
    localStorage.setItem(this.ROLE_KEY, role);
  }

  getSharedAdmin() {
    return this.admin;
  }
  getSharedEmployee() {
    return this.employee;
  }
  getSharedClient() {
    return this.client;
  }
  getSharedRole():any{
    return localStorage.getItem('role');
  }

  generatTocken(user:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/generate-token`,user)
  }

  setRole(role:any){
    return localStorage.setItem('role',role);
  }

  setUser(name:any){
    return localStorage.setItem('user',name)
  }
  getUser():any{
    return localStorage.getItem('user');
  }

logOut(){
localStorage.removeItem('role');
localStorage.removeItem('token');
}

getTeamMember(user:any):Observable<any>{
  return this.httpClient.get(`http://localhost:8083/hrms/findBy/${user}`);
} 

getCurrentUserName(name:any):Observable<any>{
  return this.httpClient.get(`http://localhost:8083/hrms/${name}`)
}

}
