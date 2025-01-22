import { Component } from '@angular/core';
import { LeftBarComponent } from "../left-bar/left-bar.component";
import { HeaderComponent } from "../header/header.component";
import { CustomersService } from '../../../services/customers/customers.service';
import { OrdersService } from '../../../services/orders/orders.service';
import { MatProgressBarModule } from '@angular/material/progress-bar'

@Component({
  selector: 'app-dashboard',
  imports: [LeftBarComponent, HeaderComponent, MatProgressBarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  customerLength = 0;
  ordersLength = 0;
  monthlyGoal = 0;
  constructor(private customersService: CustomersService, private orderService: OrdersService){
    this.customerLength = this.customersService.getLengthOfCustomers();
    this.ordersLength = this.orderService.getLengthOfOrders();
  }

  ngOnInit(){
    this.monthlyGoal = this.orderService.getMonthlyGoal();
  }

}
