import { OrderHistoryService } from './../services/order-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderHistory: any[] = [];

  constructor(private orderService: OrderHistoryService) {
   }

  ngOnInit(): void {
    this.orderHistory = this.orderService.getOrderHistory();
  }

}
