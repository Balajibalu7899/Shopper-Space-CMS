import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orders?: Observable<Order[]>
  constructor(private afStore: AngularFirestore) {
    this.getOrders("Ordered");
  }

  async getOrders(state: string) {
    this.orders = this.afStore.collection('Orders', ref => ref.where('status', '==', state)).snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as Order;
        data.id = a.payload.doc.id;
        return data;
      }))
    )
  }

  async getOrder(id: string) {
    return new Promise((resolve) => {
      this.afStore.collection('Orders').doc(id).valueChanges().subscribe(data => {
        resolve(data);
      });
    })
  }

  async getOrderProducts(id: string) {
    return new Promise((resolve) => {
      this.afStore.collection('Orders').doc(id).collection('Products').valueChanges().subscribe(data => {
        resolve(data);
      });
    })
  }

  async updateStatus(id: string, status: string) {
    if (status == 'Dispatched') {
      return await this.afStore.collection('Orders').doc(id).update({
        'status': "Dispatched", "dispatched": {
          "by": "Ocean Park",
          "time": Date.now()
        }
      })
    } else if (status == 'Delivered') {
      return await this.afStore.collection('Orders').doc(id).update({
        'status': "Delivered", "delivered": {
          "by": "Ocean Park",
          "time": Date.now()
        }
      })
    }
  }
}
