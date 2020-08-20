import { ProductsData } from './../data/products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private products: ProductsData) {
   }

  getAll(){
    return this.products.getAll();
  }

  get(productid){
    return this.products.getProduct(productid);
  }

  add(item){
    this.products.add(item);
  }

  update(productId, product)
  {
    this.products.update(productId, product);
  }

  delete(productId)
  {
    this.products.delete(productId);
  }

  getProductsCount(){
    return this.products.getAll().length;
  }

}
