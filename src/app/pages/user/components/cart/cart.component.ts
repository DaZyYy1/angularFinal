import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../../../interfaces/productinterface';
import { CartService } from '../../../../services/cartService/cart.service';
import { ProductsService } from '../../../../services/productService/products.service';
import { TotalPriceComponent } from '../totalprice/totalprice.component';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent,FooterComponent,CommonModule,FormsModule,TotalPriceComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: IProducts[] = [];
  total: number =0;
  delfee:number=15
  
  constructor(private cartServ: CartService ) {}

  ngOnInit() {
    this.cartItems = this.cartServ.getCartItems();
    this.updateTotalPrice();
  }
  removeItem(id: number): void {
    console.log('Removing item with id:', id);
    this.cartServ.removeItem(id);  
    this.cartItems = this.cartServ.getCartItems();  
    this.updateTotalPrice();  
    console.log('Updated cart items:', this.cartItems);
    
  }
  updateTotalPrice(){
    this.total = this.cartItems.reduce((sum,product)=>sum+(product.price * product.quantity),0)+this.delfee
  }
  increment(item: any): void {
    item.quantity = (item.quantity || 0) + 1;
    this.updateTotalPrice();
  }

  decrement(item: any): void {
    if (item.quantity > 0) {
      item.quantity -= 1;
      this.updateTotalPrice();
    }
  }
}
