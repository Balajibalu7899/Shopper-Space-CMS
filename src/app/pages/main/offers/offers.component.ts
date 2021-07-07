import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferServiceService } from 'src/app/services/offer-service/offer-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styles: [
  ]
})
export class OffersComponent implements OnInit {
  offers?: Offer[];
  constructor(public router: Router, private offerServ: OfferServiceService) { }

  ngOnInit(): void {
    this.offerServ.offers?.subscribe((offers) => {
      this.offers = offers;
    });
  }

  edit(id: string) {
    this.router.navigateByUrl(`offer/edit?id=${id}`);
  }

}
