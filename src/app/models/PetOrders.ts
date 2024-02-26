import { Customer } from "./Customer";
import { PetList } from "./PetList";

export class PetOrders {
    constructor(

        public  petOrderId:number,
    
        public  customer: Customer,
    
        public  pet: PetList,
    
        public  orderDate = new Date(),
    
        public  status:string,
    ){}
}