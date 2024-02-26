import { Customer } from "./Customer";
import { ProductList } from "./ProductList";

export class ProductOrders {
    constructor(
        public productOrderId: number,
        public product: ProductList,
        public orderDate = new Date(),
        public quantity: number,
        public status: string,
        public customerOfProducts: Customer,
    ) { }
}