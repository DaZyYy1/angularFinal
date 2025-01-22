import { Injectable } from '@angular/core';
import { IProducts } from '../../interfaces/productinterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProducts[] = [
    {
      id: 1,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-1.png",
      categories: "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'L'
    },
    {
      id: 2,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-2.png",
      categories:"T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'M'
    },
    {
      id: 3,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-3.png",
      categories: "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'green',
      size:'S'
    },
    {
      id: 4,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-4.png",
      categories: "T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'white',
      size:'M'
    },
    {
      id: 5,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-5.png",
      categories:  "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'black',
      size:'XL'
    },
    {
      id: 6,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-6.png",
      categories: "T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'XXL'
    },
    {
      id: 7,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-7.png",
      categories: "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'white',
      size:'M'
    },
    {
      id: 8,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-3.png",
      categories: "T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'S'
    },
    {
      id: 9,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-5.png",
      categories: "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'black',
      size:'L'
    },
    {
      id: 10,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-4.png",
      categories: "T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'S'
    },
    {
      id: 11,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      stock: true,
      price: 75.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover.png",
      categories: "Trend",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'red',
      size:'M'
    },
    {
      id: 12,
      uId: 1,
      title: "Raw Black T-Shirt Lineup12",
      stock: false,
      price: 80.00,
      SKU: Math.round(Math.random() * (99999999 - 10000000) + 10000000),
      quantity: 1,
      detail: "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      img: "./Products/cover-2.png",
      categories: "T-shirt",
      review: {
        username: "Dato",
        date: "1 week ago",
        comment: "Ecommerce"
      },
      color:'green',
      size:'L'
    },
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }
  getProductByUID(userId: number){
    return this.products.filter(user => user.uId === userId);
  }
  getProductByID(userid: number){
    return this.products.filter(user => user.id === userid)
  }
}
