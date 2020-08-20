import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  category$
  product$ = { id: 0, title: "Enter title here", price: 0, category: "1",
  imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TmXzAfJr8c1Wn2XH7sVpIgHaFu%26pid%3DApi&f=1" }
  private id;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private category:CategoryService, 
      private products:ProductsService) { 
      
        this.category$ = this.category.getProducts();
        this.id = +this.route.snapshot.paramMap.get('id');
        if(this.id) this.product$ = this.products.get(this.id)
  }

  save(product)
  {
    if(this.id) 
    {
      this.products.update(this.id, product);
    }
    else 
    {
      product['id'] = this.products.getProductsCount();
      this.products.add(product);
    }
    this.router.navigate(["admin/products"]);
  }

  delete(productId)
  {
    if(confirm("Do you want to delete this??"))
    {
      this.products.delete(productId);
    }
    this.router.navigate(["admin/products"]);
  }

  ngOnInit(): void {
  }

}
