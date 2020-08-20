import { Router } from '@angular/router';
import { ShoppinCartService } from './../services/shoppin-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartService: ShoppinCartService,
              private router: Router) { 
      
  }

  ngOnInit(): void {
    if(!this.cartService.getPlaceOrder())
    {
      this.router.navigate(["/"]);
    }
    else{
      this.cartService.setPlaceOrder(false);
    }
  }

}
