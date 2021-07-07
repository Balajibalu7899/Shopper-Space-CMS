export interface Payment {
    customer_id: string;
    order_id: string;
    time: Date;
    price: number;
    source: string;
    status: string;
    transaction_id: string;
    arn_number: string;
}