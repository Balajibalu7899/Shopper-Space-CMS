export interface Quantity {
    unit_type: string;
    base_qty: string;
    price: number;
    offer_price: number;
    stock: number | 100;
}