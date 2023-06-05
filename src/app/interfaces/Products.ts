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
    _id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    priceOriginal?:number,
    image?: string;
    title?:string,
    rating?: number;
    img?:string;
}