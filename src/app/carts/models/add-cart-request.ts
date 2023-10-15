export interface AddCartRequest {
    userId: number;
    date: Date;
    products: Product[];
}

export interface Product {
    productId: number;
    quantity: number;
}
