import { Product } from '../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  
  products: Product[];
  filteredProducts: any[];

  constructor(private productsService: ProductsService) { 
    this.products = productsService.getAll();
    this.filteredProducts = this.products;
  }

  filter(query: string)
  {
    this.filteredProducts = (query) ? 
            this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
            this.products; 
  }
}
