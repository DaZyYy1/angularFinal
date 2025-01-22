import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IProducts } from '../../../../interfaces/productinterface';
import { CartService } from '../../../../services/cartService/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  imports: [
    FooterComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HeaderComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems:IProducts[]=[];
  subtotal: IProducts[] = [];
    total: number = 0;
    delfee:number = 15;
  shippingForm: FormGroup;
  constructor(private fb:FormBuilder , private cartServ: CartService, private route:Router){
    this.shippingForm=this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required]
    })
    this.subtotal = this.cartServ.getCartItems();
    this.calculateSubTotal()
    this.cartItems= this.cartServ.getCartItems();
  }
  calculateSubTotal() {
    this.total = this.subtotal.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )
    this.subtotal=this.cartServ.getCartItems();
    return this.total
  }
  onSubmit(){
    if (this.shippingForm.valid) {
      console.log('Form Submitted:',this.shippingForm.value);
      this.route.navigate(['user/home']);
    }else{
      console.error(
        'This Form Is Invalid'
      )
    }
  }
}
