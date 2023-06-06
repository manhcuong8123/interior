export interface IProducts {
    _id?: number,
    name: string,
    price: number,
    title?: string,
    category: string,
    priceOriginal?: number,
    img: string,
}
export interface Product {
    _id?: string;
    name?: string;
    price?: number;
    quantity?: number;
    category?: string;
    priceOriginal?: number,
    title?: string,
    img?: string;

    code?: string;
    description?: string;
    inventoryStatus?: string;
    image?: string;
    rating?: number;
}