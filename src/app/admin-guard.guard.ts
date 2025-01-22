import { CanActivate, Router} from "@angular/router";
import { UserServiceService } from "./services/userService/user-service.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate{
  constructor(private userService: UserServiceService, private router: Router){}

  canActivate():boolean {
    const user = this.userService.getCurrentUser();
    if(user && user.status === "admin" && user.active === true){
      return true
    }else{
      return false;
    } 
  }
}
