import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftBarComponent } from '../left-bar/left-bar.component';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../../services/customers/customers.service';

@Component({
  selector: 'app-customers',
  imports: [RouterModule,CommonModule, HeaderComponent, LeftBarComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements AfterViewInit
{
  constructor(private customerService: CustomersService){}

  displayedColumns: string[] = ['img', 'Name', 'Email', 'Shipping Address'];
  dataSource = new MatTableDataSource(); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort;
  }

  ngOnInit(){
    const customers = this.customerService.getCustomers();
    if(Array.isArray(customers) && customers.length > 0){
      this.dataSource.data = customers;
    }else{
      console.log("")
    }
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
