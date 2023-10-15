import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface AllProducts {
    products: Products[];
}


// export interface iProductsService {

//     getProducts(): Observable<any>;
// } 

// class ProductsService implements iProductsService {
//     constructor(private httpClient: HttpClient) {}
//     getProducts(): Observable<any> {
//         return this.httpClient.get('https://fakestoreapi.com/products');    }
// }


// interface iProductsRepository {
//     getProducts(): any;

// }

// class ProductsRepository implements iProductsRepository {
//     constructor(private service: ProductsService) {}
//    async getProducts() {

//    const products: any = await this.service.getProducts();


// }

// }


export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    quantity: number;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate: number;
    count: number;
}
