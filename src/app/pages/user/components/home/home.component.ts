import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../../../services/productService/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProducts } from '../../../../interfaces/productinterface';
import { CartService } from '../../../../services/cartService/cart.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule],
  templateUrl: '/home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:IProducts[]=[];
  maxItem:number = 4;
  activeButton:'featured' | 'latest' = 'featured';
constructor(private prodServ:ProductsService , private cartServe:CartService){
  this.products = prodServ.getProducts();
  console.log(this.products);
}
 get getFourProduct(){
  return this.products.slice(0,4);
 }
 setActiveButton(button: 'featured' | 'latest') {
  this.activeButton = button;
}
  addToCart(product:IProducts){
      this.cartServe.addToCart(product);
  }
}
