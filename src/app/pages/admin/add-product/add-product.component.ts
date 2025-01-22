import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LeftBarComponent } from '../left-bar/left-bar.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [
    HeaderComponent, 
    LeftBarComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})

export class AddProductComponent {
  colorOption = ['#A3BEF8', '#FFD58A', '#83B18B', '#4078FF'];
  sizeOption = ['S', 'M', 'L', 'X', 'XL'];

  addProduct = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    category: new FormControl('', [Validators.required, Validators.minLength(5)]),
    slug: new FormControl('', [Validators.minLength(4)]),
    sku: new FormControl('', [Validators.min(1000)]),
    description: new FormControl('', [Validators.minLength(10)]),
    stockStatus: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    colors: new FormArray(this.colorOption.map(() => new FormControl(false))),
    sizes: new FormArray(this.sizeOption.map(() => new FormControl(false))),
  });

  selectedColors: string[] = [];
  selectedSizes: string[] = [];

  getSelectedColor(): string[] {
    const colorsFormArray = this.addProduct.get('colors') as FormArray;
    return colorsFormArray.controls
      .map((control, i) => (control.value ? this.colorOption[i] : null))
      .filter((color) => color !== null) as string[];
  }

  getSelectedSize(): string[] {
    const sizesFormArray = this.addProduct.get('sizes') as FormArray;
    return sizesFormArray.controls
      .map((control, i) => (control.value ? this.sizeOption[i] : null))
      .filter((size) => size !== null) as string[];
  }

  onSubmite() {
    this.selectedColors = this.getSelectedColor();
    this.selectedSizes = this.getSelectedSize();

    const newProduct = {
      ...this.addProduct.value,
      colors: this.selectedColors,
      sizes: this.selectedSizes,
    };

    console.log('New Product:', newProduct);
  }
}
