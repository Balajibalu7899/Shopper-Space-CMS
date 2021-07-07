import { Quantity } from "./quantity";

export interface CartProduct {
    product_id: string;
    title: string;
    sub_title: string;
    images: string[];
    price: number;
    discount: number;
    units: number;
    quantity: number;
    quantity_type: string;
    quantities: Quantity[];
    cut: string;
    cuts: string[];
}