import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllProducts, Products } from '../models/all-products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Products[]> {

    return this.httpClient.get<Products[]>(`https://fakestoreapi.com/products`);
  }
  getAllCategories(): Observable<string[]> {

    return this.httpClient.get<string[]>(`https://fakestoreapi.com/products/categories`);
  }


  getProductsByCategory(category: string): Observable<Products[]> {

    return this.httpClient.get<Products[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  getProductDetailsById(id: number): Observable<Products> {

    return this.httpClient.get<Products>(`https://fakestoreapi.com/products/${id}`);
  }

}
