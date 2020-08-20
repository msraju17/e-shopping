import { OrderHistoryData } from './../data/order-history';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  
  private orderKey = 10;

  constructor(private orderData: OrderHistoryData) { 
  }

  getAll(){
    return this.orderData.get();
  }

  getOrderHistory(){
      return this.orderData.getHistory();
  }

  addOrder(orderPlaced, ProductList){
    this.create(orderPlaced, ProductList);
  }

  private create(order, products)
  {
    let orderPlace = {};

    let orderDetails = {};
    orderDetails['customerName'] = order.customerName;
    orderDetails['orderKey'] = 'Order0'+this.orderKey++;
    orderDetails['orderCreated'] = new Date().toString().substring(0,25);

    orderPlace['orderdetails'] = orderDetails;
    orderPlace['shipping'] = order;
    orderPlace['products'] = products;
    this.orderData.add(orderPlace);
  }
}
