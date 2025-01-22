import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../services/userService/user-service.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  url = ""
  words = [''];
  activeUser;
  constructor(private router: Router, private userService: UserServiceService){
    this.url = this.router.url
    this.words = this.url.split('/').filter(part => part);
    this.activeUser = userService.getCurrentUser();
  }

  logOut(){
    this.userService.logOut();
    alert("Log out!");
    this.router.navigate(['admin/login']);
  }
}
