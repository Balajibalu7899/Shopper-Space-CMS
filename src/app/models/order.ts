import { Time } from "@angular/common";
import { OrderAddress } from "./address";

export interface OrderState {
    by: string;
    time: Date;
}

export interface Order {
    id: string;
    status: string;
    customer_id: string;
    outlet: string;
    time: Date;
    expected_time: Date;
    items_count: number;
    price: number;
    discount: number;
    total_price: number;
    coupon_code: string;
    address: OrderAddress;
    ordered: OrderState;
    dispatched: OrderState;
    delivered: OrderState;
    payment: Payment;
}

export interface Payment {
    id?: string;
    method: string;
    time: Time;
}