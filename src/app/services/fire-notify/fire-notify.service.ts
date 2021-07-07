import { Injectable } from '@angular/core';
import { AngularFireMessagingModule } from '@angular/fire/messaging';


@Injectable({
  providedIn: 'root'
})
export class FireNotifyService {

  constructor(private fireNotify: AngularFireMessagingModule) { }
}
