import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftBarComponent } from "../left-bar/left-bar.component";
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ProductsService } from '../../../services/productService/products.service';
import { IProducts } from '../../../interfaces/productinterface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterModule,CommonModule, HeaderComponent, LeftBarComponent, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements AfterViewInit {
  constructor(private productService: ProductsService){
  }

  displayedColumns: string[] = ['img', 'title', 'SKU', 'price', 'stock', 'categories'];
  dataSource = new MatTableDataSource<IProducts>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    const userId = 1;
    const product = this.productService.getProductByUID(userId);
    if (product) {
      this.dataSource.data = product;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
