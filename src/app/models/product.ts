import { Category } from './category';
import { Cut } from './cut';
import { Quantity } from './quantity';

export interface Delivery {
  description: string;
  time: Date;
}

export interface Special {
  image: string;
  title: string;
  sub_title: string;
  description: string;
}

export interface Product {
  product_id?: string;
  image: string;
  name: string;
  description: string;
  type: string;
  brand: string;
  image_url: string;
  primary_qty: number;
  quantities: Quantity[];
  categories: Category[];
}
