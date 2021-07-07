import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/models/action';
import { EditType } from 'src/app/models/edit-type';
import { Offer } from 'src/app/models/offer';
import { Product } from 'src/app/models/product';
import { FireStorageService } from 'src/app/services/fire-storage/fire-storage.service';
import { OfferServiceService } from 'src/app/services/offer-service/offer-service.service';
import { ProductsServiceService } from 'src/app/services/products-service/products-service.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styles: [
  ]
})
export class OfferFormComponent implements OnInit {
  Action = Action;
  action?: Action;
  EditType = EditType;
  editType?: EditType;
  offerId?: string;
  offer = {} as Offer;
  products?: Product[];
  constructor(public router: Router, public actRoute: ActivatedRoute, private offerServ: OfferServiceService, private productServ: ProductsServiceService, private uploadServ: FireStorageService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(param => {
      if (param.action == "edit") {
        this.action = Action.EDIT;
        this.actRoute.queryParams.subscribe(query => {
          this.editType = EditType.OFFER;
          this.offerId = query.id;
          this.offerServ.offerColletion?.doc(this.offerId).valueChanges().subscribe((offer) => {
            this.offer = offer! as Offer;
          })
          this.productServ.getOfferProducts(this.offerId!).then((products) => {
            this.products = products as Product[];
            console.log(this.products);
          })
        })
      } else {
        console.log('test')
        this.action = Action.CREATE;
        this.editType = EditType.OFFER;
        this.offerId = this.offerServ.getId();
      }
    })
  }

  cangeType(Type: EditType) {
    this.editType = Type;
  }

  async imageUpload(event: any) {
    this.offer.image = await this.uploadServ.upload(`Public/Offers/${this.offerId}`, event.files[0]) as string;
  }

  async updateProducts(products: Product[]) {
    this.editType = EditType.OFFER;
    for (let index = 0; index < products.length; index++) {
      // products[index].offer = this.offerId;
      // products[index].offer_price = (products[index].price - ((products[index].price / 100) * this.offer.amount))
      delete products[index].product_id;
      const id = this.productServ.genId();
      await this.productServ.addProduct(id, products[index]);
      this.products?.push(products[index]);
    }
    console.log('Compeleted');
  }

  removeProduct(id: string) {
    this.productServ.removeProduct(id);
    this.products = this.products?.filter((product) => product.product_id != id);
  }

  create() {
    this.offerServ.addOffer(this.offerId!, this.offer);
    this.router.navigateByUrl('offers');
  }

  update() {
    this.offerServ.updateOffer(this.offerId!, this.offer);
    this.router.navigateByUrl('offers');
  }

  remove() {
    this.offerServ.deleteOffer(this.offerId!);
    this.router.navigateByUrl('offers');
  }
}
