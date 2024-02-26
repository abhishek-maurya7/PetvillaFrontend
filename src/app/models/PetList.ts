export class PetList {
    constructor(
        public petId:number,
        public category:string,
        public name:string,
        public breed:string,
        public color:string,
        public description:string,
        public dateOfListing:string,
        public price:number
    ){}
}