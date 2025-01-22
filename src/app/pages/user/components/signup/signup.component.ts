import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../../../services/signup/signup.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports:[FooterComponent,HeaderComponent, ReactiveFormsModule,CommonModule],
})
export class SignupComponent {
  signupForm:FormGroup;

  constructor(private fb: FormBuilder, private signupService: SignupService ,private route:Router) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupService.addToUser(this.signupForm.value);
      alert('User signed up successfully!');
      this.signupForm.reset();
      this.route.navigate(['user/login'])
    } else {
      alert('Please fill in the form correctly.');
    }
  }
}
