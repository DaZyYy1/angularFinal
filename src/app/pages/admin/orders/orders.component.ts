import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LeftBarComponent } from "../left-bar/left-bar.component";
import { HeaderComponent } from "../header/header.component";
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { OrdersService } from '../../../services/orders/orders.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  imports: [LeftBarComponent, HeaderComponent, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements AfterViewInit{
  constructor(private orderService: OrdersService){}
  displayedColumns: string[] = ["img", "title", "id", "price", "status"];
  datasource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue;
  }

  ngOnInit() {
    const orders = this.orderService.getOrders();
    if (Array.isArray(orders) && orders.length > 0) {
      this.datasource.data = orders;
    } else {
      console.error("No orders found or `getOrders` is not returning an array.");
      this.datasource.data = [];
    }
  }

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}
