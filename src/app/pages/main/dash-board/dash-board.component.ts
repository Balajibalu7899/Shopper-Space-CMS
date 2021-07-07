import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';
import { Order } from "../../../models/order";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styles: [
  ]
})
export class DashBoardComponent implements OnInit {
  orders?: Order[];
  maxprice?: number ;
  constructor(private orderServ: OrderServiceService) { }

  ngOnInit(): void {
    this.orderServ.orders?.subscribe((orders)=>{
      this.orders = orders;
    })
  }
}
