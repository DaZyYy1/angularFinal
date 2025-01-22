import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../../services/userService/user-service.service';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  adminLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  constructor(private router: Router, private auth: AuthService){
  }

  onSubmit(){
    if(this.adminLogin.valid){
      const email = this.adminLogin.get('email')!.value as string;
      const password = this.adminLogin.get('password')!.value as string;

      this.auth.adminSignIn(email, password);
    }
  }
}
