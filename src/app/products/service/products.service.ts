import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllProducts, Products } from '../models/all-products';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Products[]> {

    return this.httpClient.get<Products[]>(`${environment.baseUrl}products`);
  }
  getAllCategories(): Observable<string[]> {

    return this.httpClient.get<string[]>(`${environment.baseUrl}products/categories`);
  }


  getProductsByCategory(category: string): Observable<Products[]> {

    return this.httpClient.get<Products[]>(`${environment.baseUrl}products/category/${category}`);
  }

  getProductDetailsById(id: number): Observable<Products> {

    return this.httpClient.get<Products>(`${environment.baseUrl}products/${id}`);
  }

}
