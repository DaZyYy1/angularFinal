import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private users:any []=[];
  constructor() { }
  addToUser(user:any){
    this.users.push(user);
  }
  getUsers(){
    return this.users;
  }
  getUserByEmail(email: string){
    return this.users.find(user => user.email === email);
  }
}
