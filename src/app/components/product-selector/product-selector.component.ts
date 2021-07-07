import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsServiceService } from 'src/app/services/products-service/products-service.service';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styles: [
  ]
})
export class ProductSelectorComponent implements OnInit {
  @Input() products!: Product[];
  @Output() update = new EventEmitter<Product[]>();
  allProducts?: Product[];
  newProducts: Product[] = [];
  constructor(private productServ: ProductsServiceService) { }

  ngOnInit(): void {
    this.productServ.products?.subscribe((products) => {
      this.allProducts = products;
    })
  }

  addProduct(productRef: Product) {
    // const data = this.products.filter((product) => product.title == productRef.title);
    // const newData = this.newProducts.filter((product) => product.title == productRef.title);
    // if (data.length == 0 && newData.length == 0) {
    //   this.newProducts.push(productRef);
    // }
  }

  remove(productRef: Product) {
    this.newProducts = this.newProducts.filter((product) => product != productRef);
  }

  save() {
    this.update.emit(this.newProducts);
  }

}
