export interface IProducts{
    _id?:number,
    name:string,
    price:number,
    title?:string,
    category:string,
    priceOriginal?:number,
    img:string,
}
interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}