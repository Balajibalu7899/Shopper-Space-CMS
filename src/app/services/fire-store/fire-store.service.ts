import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: AngularFirestore) { }
  
  
}
