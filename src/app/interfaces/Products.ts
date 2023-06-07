export interface IProducts{
    _id?:number,
    name:string,
    price:number,
    title?:string,
    category:string,
    priceOriginal?:number,
    img:string,
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    price?: number;
    quantity?: number;
    category?: string;
    priceOriginal?:number,
    title?:string,
    img?:string;
    image?: string;
    rating?: number;
    inventoryStatus?: string;
    description?: string;
}