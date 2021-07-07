import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-coupons-form',
  templateUrl: './coupons-form.component.html',
  styles: [
  ]
})
export class CouponsFormComponent implements OnInit {
  coupon = {} as Coupon;
  constructor() { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.coupon);
  }

}
