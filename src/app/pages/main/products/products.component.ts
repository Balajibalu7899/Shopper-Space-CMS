import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { CategoryServiceService } from 'src/app/services/category-service/category-service.service';
import { ProductsServiceService } from 'src/app/services/products-service/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  categories?: Category[];
  products?: Product[];
  constructor(public actRoute: ActivatedRoute,public router: Router,private api: ApiServiceService) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params)=>{
      if(params){
        console.log(params);
        this.api.get(`products?skip=${params.skip}&limit=${params.limit}`).subscribe((products)=>{
          this.products = products;
        })
      }else{
        this.api.get("products").subscribe((products)=>{
          this.products = products;
        })
      }
    })
  }

  edit(productId: string){
    this.router.navigateByUrl(`product/edit?product_id=${productId}`)
  }
}
