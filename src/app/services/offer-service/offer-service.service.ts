import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from 'src/app/models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  offerColletion?: AngularFirestoreCollection;
  offers?: Observable<Offer[]>
  constructor(private afStore: AngularFirestore) {
    this.offerColletion = this.afStore.collection('Offers');
    this.getOffers();
  }

  getId() {
    return this.afStore.createId();
  }

  getOffers() {
    this.offers = this.offerColletion?.snapshotChanges().pipe(
      map((action) => action.map(a => {
        const data = a.payload.doc.data() as Offer;
        data.id = a.payload.doc.id;
        return data;
      })
      )
    )
  }

  addOffer(id: string, offer: Offer) {
    try {
      this.offerColletion?.doc(id).set(offer);
    } catch (err) {
      console.log(err);
      throw "somtring went worng";
    }
  }

  updateOffer(id: string, offer: Offer) {
    delete offer.id;
    try {
      this.offerColletion?.doc(id).update(offer);
    } catch (err) {
      console.log(err);
      throw "somtring went worng";
    }
  }

  deleteOffer(id: string) {
    try {
      this.offerColletion?.doc(id).delete();
    } catch (err) {
      console.log(err);
      throw "somtring went worng";
    }
  }
}
