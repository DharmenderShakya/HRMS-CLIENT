import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

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

  

  getSharedRole(){
    return localStorage.getItem(this.ROLE_KEY);
  }
}
