import { ShoppinCartService } from './../services/shoppin-cart.service';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filterProducts: Product[] = [];
  categorys : Category[];
  categoryKey;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService, 
    private categoryService: CategoryService,
    private cartService: ShoppinCartService ) {    }

   addToCart(item) {
     this.cartService.addToCart(item);
   }

   removeFromCart(itemId) {
    this.cartService.removeFromCart(itemId);
  }

   getQuantity(itemId)
   {
     return this.cartService.getQuantity(itemId);
   }

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.categorys = this.categoryService.getProducts();
    this.filterProducts = this.products;

    this.route.queryParamMap.subscribe(params => {
      this.categoryKey = +params.get('category'); 
      let categoryName = this.categorys.find(name => name.id === this.categoryKey);

     this.filterProducts = (categoryName) ? 
                            this.products.filter(p => 
                                p.category.trim().toLowerCase() == categoryName.name.trim().toLowerCase()):
                            this.products;
    });
  }
}
