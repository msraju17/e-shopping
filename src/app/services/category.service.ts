import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoary: any = [
    { id: 1, name: 'bread'},
    { id: 2, name: 'dairy'},
    { id: 3, name: 'fruits'},
    { id: 4, name: 'seasonings'},
    { id: 5, name: 'vegetables'} 
  ]
  constructor() { }

  getProducts()
  {
    return this.categoary;
  }

  getCategoaryName(id)
  {
    return this.categoary.find(name => name.id === id).name;
  }

}
