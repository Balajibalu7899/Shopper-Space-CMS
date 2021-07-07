export interface Coupon {
    code: string;
    title: string;
    sub_title: string;
    description: string;
    image: string;
    type: string;
    amount: number;
    minimum_order: number;
    expiry: Date;
}