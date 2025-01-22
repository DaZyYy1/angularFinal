import { Injectable } from '@angular/core';
import { IProducts } from '../../interfaces/productinterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: IProducts[] = [];

  addToCart(product: IProducts) {
    this.cartItems.push(product);
  }
  getCartItems(): IProducts[] {
    return this.cartItems;
  }
  removeItem(id: number): void {
    console.log('Before removing:', this.cartItems);
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    console.log('After removing:', this.cartItems);
  }
  constructor() { }
}
