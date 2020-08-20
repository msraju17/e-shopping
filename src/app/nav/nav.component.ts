import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { ShoppinCartService } from './../services/shoppin-cart.service';
import { Component, OnInit } from '@angular/core';
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbarCollapsed = true;
  store = faStore;
  cart = faShoppingCart

  constructor(
    private cartServices: ShoppinCartService,
    private auth: AuthService,
    private router: Router
    ) { 
    }

    getQuantityCount(){
      return this.cartServices.getTotalQuantity();
    }

    getValid(){
      return this.auth.getValid();
    }

    logout(){
      this.auth.set(false);
      this.router.navigate(['/']);
    }

  ngOnInit(): void {
    
  }

}
