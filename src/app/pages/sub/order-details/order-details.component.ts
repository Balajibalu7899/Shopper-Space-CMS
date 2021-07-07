import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderProduct } from 'src/app/models/order-product';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {
  orderId?: string;
  order?: Order;
  products?: OrderProduct[]
  constructor(public router: Router, public actRout: ActivatedRoute, private orderServ: OrderServiceService) { }

  ngOnInit(): void {
    this.actRout.params.subscribe((params) => {
      if (params.id != null) {
        this.orderId = params.id;
        this.getOrder();
      }
    })
  }

  async getOrder() {
    this.orderServ.getOrder(this.orderId!).then((order) => {
      this.order = order as Order;
      console.log(this.order)
      this.orderServ.getOrderProducts(this.orderId!).then((products) => {
        this.products = products as OrderProduct[];
        console.log(this.products)
      })
    })
  }

  async dispatched() {
    this.order!.status = "Dispatched";
    await this.orderServ.updateStatus(this.orderId!, "Dispatched");
    this.router.navigateByUrl('orders')
  }

  async deliverd() {
    this.order!.status = "Delivered";
    await this.orderServ.updateStatus(this.orderId!, "Delivered");
    this.router.navigateByUrl('orders');
  }

}
