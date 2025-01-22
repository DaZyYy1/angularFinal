import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders = [
    {
      id: 1,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-1.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 2,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-2.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 3,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-3.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 4,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-4.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 5,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-5.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
    {
      id: 6,
      uId: 1,
      title: "Raw Black T-Shirt Lineup",
      price: 75.00,
      quantity: 1,
      img: "./Products/cover-6.png",
      categories: ["T-shirt", "Trend"],
      status: "Completed"
    },
  ]

  monthlyGoal = 100;
  constructor() { }

  getLengthOfOrders(): number{
    return this.orders.length
  }

  getOrders(){
    return this.orders;
  }

  getMonthlyGoal():number{
    return this.monthlyGoal;
  }

  changeMonthlyGoal(newGoal: any):void{
    this.monthlyGoal = newGoal;
  }
}
