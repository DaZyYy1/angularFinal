import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftBarComponent } from "../left-bar/left-bar.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../../services/orders/orders.service';

@Component({
  selector: 'app-settings',
  imports: [CommonModule,HeaderComponent, LeftBarComponent, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings = new FormGroup({
    siteName: new FormControl('', Validators.minLength(6)),
    supportEmail: new FormControl('', Validators.email),
    monthlyGoal: new FormControl(''),
  })

  constructor(private orderService: OrdersService){}

  onSubmit(){
    const newGoal = this.settings.get('monthlyGoal')?.value;
    console.log(typeof(newGoal));
    this.orderService.changeMonthlyGoal(newGoal);
  }
}
