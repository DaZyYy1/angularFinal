import { Component,Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../../../services/productService/products.service';
import { IProducts } from '../../../../interfaces/productinterface';
import { privateDecrypt } from 'crypto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { CartService } from '../../../../services/cartService/cart.service';
@Component({
  selector: 'app-categories',
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule,PaginationComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products:IProducts[]=[];
  currentPage: number = 1; 
  itemsPerPage: number = 6  ; 
  Math = Math;
  
  
constructor(private prodServ:ProductsService,private cartServ:CartService){
  this.products=prodServ.getProducts();
  this.products = this.prodServ.getProducts(); 
  this.addToCart
}


get paginatedProducts() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.products.slice(startIndex, endIndex);
}
get totalPages(): number {
  return Math.ceil(this.products.length / this.itemsPerPage); 
}
onPageChange(newPage: number): void {
  this.currentPage = newPage;
}
addToCart(product:IProducts){
  console.log(this.cartServ.addToCart(product));
 }
  
}

