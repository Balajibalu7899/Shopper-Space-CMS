import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/models/category';
import { Cut } from 'src/app/models/cut';
import { EditType } from 'src/app/models/edit-type';
import { Product, Special } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { FireStorageService } from 'src/app/services/fire-storage/fire-storage.service';
import { ProductsServiceService } from 'src/app/services/products-service/products-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [],
})
export class ProductFormComponent implements OnInit {
  done = false;
  edit?: boolean;
  EditType = EditType;
  editType?: EditType;
  quantity = {} as Quantity;
  product = {} as Product;
  product_id!: string;
  category?: string;
  constructor(
    public router: Router,
    public actRouter: ActivatedRoute,
    private api: ApiServiceService,
    private productService: ProductsServiceService,
    private uploadServ: FireStorageService
  ) { }

  ngOnInit(): void {
    this.product.categories = [];
    this.actRouter.params.subscribe((param) => {
      this.editType = this.EditType.PRODUCT;
      if (param.action == 'edit') {
        this.edit = true;
        this.actRouter.queryParams.subscribe((query) => {
          if (query.product_id != undefined) {
            this.product_id = query.product_id;
            this.api.get(`products/${this.product_id}`).subscribe((product)=>{
              console.log(product)
              this.product = product;
            })
          }
        });
      } else if (param.action == 'new') {
        this.edit = false;
        this.product_id = this.productService.genId();
        this.product.primary_qty = 0;
        this.product.quantities = []
        this.product.categories = [];
        // this.product.cuts = [];
        // this.product.specials = [];
      }
    });
  }


  imageUpload(event: any) {
    console.log(event.files);
    const file = event.files[0];
    this.uploadServ.publicUpload(`test/Product/${this.product_id}/Images/${file.name}`, file).then((url) => {
      this.product.image = `https://storage.googleapis.com/shopper-space-public/test/Product/${this.product_id}/Images/${file.name}`;
    })
  }

  addQuantity(){
    this.product.quantities.push(this.quantity);
    this.quantity = {} as Quantity;
  }

  async create() {
    try {
      this.product.categories = this.product.categories.map((category)=> {return {id: category.id} as Category});
      await this.api.post(`products/${this.product_id}`,this.product).subscribe((data)=>{
        this.done = true;
        // this.router.navigateByUrl('products');
      })
    } catch (err) {
      console.log(err);
    }
  }

  async update() {
    try {
      this.product.categories = this.product.categories.map((category)=> {return {id: category.id} as Category});
      console.log(this.product);
      await this.api.post(`products/${this.product_id}`,this.product).subscribe((data)=>{
        this.done = true;
        // this.router.navigateByUrl('products');
      })
    } catch (err) {
      console.log(err)
    }
  }

  changeEditType(type: EditType) {
    this.editType = type;
  }

  editCategory(categories: Category[]) {
    this.product.categories = categories;
    this.editType = EditType.PRODUCT;
  }

  editSpecial(specials: Special[]) {
    // this.product.specials = specials;
    this.editType = EditType.PRODUCT;
  }
}
