import { Address } from "./address";
import { CartProduct } from "./cart-product";
import { Coupon } from "./coupon";

export interface User {
    user_id: string;
    name: string;
    email: string;
    phone_number: number;
    profile_image: string;
    tag: string;
    default_address: number;
    addresses: Address[];
    cart: CartProduct[];
    coupons: Coupon[]
}