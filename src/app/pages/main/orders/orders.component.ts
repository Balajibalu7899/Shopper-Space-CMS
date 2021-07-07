import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})
export class OrdersComponent implements OnInit {
  orders?: Order[]
  constructor(public router: Router, private orderServ: OrderServiceService) { }

  ngOnInit(): void {
    this.orderServ.orders?.subscribe((orders) => {
      this.orders = orders;
    })
  }

  getOrders(state: string) {
    this.orderServ.getOrders(state);
    this.orderServ.orders?.subscribe((orders) => {
      this.orders = orders;
    })
  }

  viewOrder(id: string) {
    this.router.navigateByUrl(`order/${id}`);
  }

}
