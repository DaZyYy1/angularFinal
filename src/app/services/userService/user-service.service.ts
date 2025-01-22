import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  admin: IUser[] = [
    {
      id: 1,
      email: 'davit.gogoladze@gau.edu.ge',
      password: 'password123',
      status: "user",
      active: false,
    }
  ]

  activeUser: any;

  constructor() { }

  getUserByEmail(email: string){
    return this.admin.find(user => user.email === email);
  }

  getUserById(id: number){
    this.activeUser = this.admin.find(user => user.id === id)
    console.log(typeof(this.activeUser));
  }

  getCurrentUser(){
    return this.activeUser;
  }

  logOut(){
    this.activeUser.active = false;
  }
}
