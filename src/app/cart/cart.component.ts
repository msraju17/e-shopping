import { Router } from '@angular/router';
import { ShoppinCartService } from './../services/shoppin-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList: any = [];
  cart$;
  totalPrice$;

  constructor(
    private cartService: ShoppinCartService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.cart$ = this.cartService.getTotalQuantity();
    this.productList = this.cartService.getAll();
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

 clearCart()
  {
    this.cartService.clearShoppingCart();
    this.productList = [];
    this.cart$ = 0;
  }

  checkOut()
  {
    this.cartService.setPlaceOrder(true);
    this.router.navigate(['/shipping'])
  }

}
