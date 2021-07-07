import { Location } from "./locaton";

export interface Outlet {
    title: string;
    sub_title: string;
    image: string;
    slug: string;
    tags: string[];
    address: string;
    location: Location;
}
