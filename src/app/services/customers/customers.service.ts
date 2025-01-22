import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = [
    {
      id: 1,
      name: "Esther Howard",
      email: "esther.howard@gmail.com",
      address: "8642 Yule Street, Arvada CO 80007",
    },
    {
      id: 2,
      name: "Wade Warren",
      email: "esther.howard@gmail.com",
      address: "5331 Rexford Court, Montgomery AL 36116",
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      email: "esther.howard@gmail.com",
      address: "2325 Eastridge Circle, Moore OK 73160",
    },
    {
      id: 4,
      name: "Robert Fox",
      email: "esther.howard@gmail.com",
      address: "2436 Naples Avenue, Panama City FL 32405",
    },
    {
      id: 5,
      name: "Dianne Russell",
      email: "esther.howard@gmail.com",
      address: "6095 Terry Lane, Golden CO 80403",
    },
    {
      id: 6,
      name: "Ralph Edwards",
      email: "ralph.edwards@gmail.com",
      address: "4001 Anderson Road, Nashville TN 37217",
    },
  ]
  constructor() { }

  getCustomers() {
    return this.customers;
  }

  getLengthOfCustomers(): number{
    return this.customers.length;
  }
}
