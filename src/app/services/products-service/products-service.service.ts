import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Product } from 'src/app/models/product';
import { ApiServiceService } from '../api-service/api-service.service';
import { UserAuthService } from '../user-auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private productDoc?: AngularFirestoreDocument<Product>;
  productsCollection?: AngularFirestoreCollection<Product>;
  products?: Observable<Product[]>;
  product?: Observable<Product | undefined>;
  constructor(private db: AngularFirestore,private api: ApiServiceService) {
    this.productsCollection = this.db.collection<Product>('Products');
    this.getProducts();
  }

  genId(): string {
    return this.db.createId();
  }

  async getProducts() {
    this.products = this.productsCollection!.snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as Product;
        data.product_id = a.payload.doc.id;
        return data;
      }))
    )
  }

  getOfferProducts(offerid: string) {
    return new Promise((resolve) => {
      this.db.collection('Products', ref => ref.where('offer', '==', offerid))!.snapshotChanges().pipe(
        map(action => action.map(a => {
          const data = a.payload.doc.data() as Product;
          data.product_id = a.payload.doc.id;
          return data;
        }))
      ).subscribe((products) => {
        resolve(products);
      })
    })
  }

  async addProduct(product_id: string, product: Product) {
    this.productsCollection?.add(product);
    try {
      await this.productsCollection?.doc(product_id).set(product)
    } catch (err) {
      console.log(err);
      throw "Not Able to update";
    }
  }

  async updateProduct(product_id: string, product: Product) {
    try {
      await this.api.post(`products/${product_id}`,product);
    } catch (err) {
      console.log(err);
      throw "Not Able to update";
    }
  }

  async removeProduct(id: string) {
    try {
      await this.productsCollection?.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }
}
