import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class ShoppinCartService {

  private canPlaceOrder = false;
  private shoppingCart = {};
  private cartKey= 'random007';
  private items = [];
  
  constructor() { }

  getPlaceOrder(){
    return this.canPlaceOrder;
  }

  setPlaceOrder(input){
    this.canPlaceOrder = input;
  }

  getAll(){
    if(Object.keys(this.shoppingCart).length > 0)
      return this.shoppingCart['items'];
  return [];
  }

  addToCart(product)
  {
    this.trackCard(product); 
  }

  removeFromCart(productId)
  {
    this.manageQuantity(productId, "remove");
  }

  getQuantity(productId)
  {
    if(Object.keys(this.shoppingCart).length > 0)
    {
      let index = this.shoppingCart['items'].map(i=>i.product.id);
      if(index.includes(productId))
      return this.shoppingCart['items'][index.indexOf(productId)].quanity;
    }
    return 0;
  }

  getTotalQuantity(){
    if(Object.keys(this.shoppingCart).length > 0){
      let itemsList =  this.shoppingCart['items'].map(i=>i.quanity);
      if(itemsList.length > 0) 
            return itemsList.reduce((a,b)=> a+b);
    }
  }

  getTotalPrice()
  {
    let sum = 0;
    if(Object.keys(this.shoppingCart).length > 0){
      let itemsList =  this.shoppingCart['items'];
      for(let item of itemsList)
      {
        sum += item['product'].price*item['quanity'];
      }
      return sum;
    }
    return sum;
  }

  clearShoppingCart(){
    this.shoppingCart = {};
    this.items = [];
  }

  

   private createCart()
  {
    this.shoppingCart = {
      cid: this.cartKey,
      dateCreated: new Date().getTime(),
      items: this.items
    };
  }

  private manageQuantity(id,action)
  {
    let index = this.items.map(i => i.product.id).indexOf(id);
    if(action == "add")
    {
      this.items[index].quanity++;
    }
    else{
      if(this.items[index].quanity === 1)
      {
        this.items.splice(index,1); return;
      }
      this.items[index].quanity--;
    }
  }

  private trackCard(item)
  {
    if(Object.keys(this.shoppingCart).length === 0)
     {
      this.createCart();
    }
    if(this.items.length === 0 || !this.items.map(i=>i.product.id).includes(item.id))
    {
      this.items.push({
        product : item,
        quanity: 1
      });
    }
    else{
      this.manageQuantity(item.id, "add");
    }
  }
}
