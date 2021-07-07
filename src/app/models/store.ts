import { Location } from "./locaton";

export interface Store {
    store_id: string;
    name: string;
    type: string;
    store_image: string;
    gst_number: string;
    address: string;
    phone_number: string;
    returns: boolean;
    open: boolean;
    token: string;
    location: Location;
    categories: any[];
}