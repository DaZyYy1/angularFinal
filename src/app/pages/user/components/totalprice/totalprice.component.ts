import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IProducts } from '../../../../interfaces/productinterface';
import { CartService } from '../../../../services/cartService/cart.service';

@Component({
  selector: 'app-totalprice',
  imports: [CommonModule,RouterLink],
  templateUrl: './totalprice.component.html',
  styleUrl: './totalprice.component.css'
})
export class TotalPriceComponent implements OnInit {
  subtotal: IProducts[] = [];
  total: number = 0;
  delfee:number = 15;
  constructor(
      private cartServ: CartService,
      private route:Router
    ) {}

  ngOnInit() {
    this.subtotal = this.cartServ.getCartItems();
    this.calculateSubTotal();
  }
  calculateSubTotal() {
    this.total = this.subtotal.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    this.subtotal=this.cartServ.getCartItems();
    return this.total
  }
  changePath(){
    this.route.navigate(['user/checkout']);
  }
}
