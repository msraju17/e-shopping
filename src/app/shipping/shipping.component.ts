import { Router } from '@angular/router';
import { OrderHistoryService } from './../services/order-history.service';
import { ShoppinCartService } from './../services/shoppin-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  productList: any = [];
  totalQuantity$;
  totalPrice$;

 constructor( 
    private router: Router,
    private cartService: ShoppinCartService,
    private orderService: OrderHistoryService
  )
   { }

  ngOnInit(): void {

    if(!this.cartService.getPlaceOrder())
    {
      this.router.navigate(['/']);
    }
    else{
      this.productList = this.cartService.getAll();
      this.totalQuantity$ = this.cartService.getTotalQuantity();
      this.totalPrice$ = this.cartService.getTotalPrice();
    }
  }

  placeOrder(orderDetails)
  {
    this.orderService.addOrder(orderDetails, this.productList);
    this.cartService.clearShoppingCart();
    this.cartService.setPlaceOrder(true);''
    this.router.navigate(['/order-success']);
  }

}
