export interface OrderProduct {
    product_id?: string;
    image: string;
    title: string;
    price: number;
    cut: string;
    weight: number | 0.5;
    unit_type: string | 'Kg';
}