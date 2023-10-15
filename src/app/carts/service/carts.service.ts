import { Injectable } from '@angular/core';
import { Products } from 'src/app/products/models/all-products';
import { AddCartRequest } from '../models/add-cart-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from 'src/app/shared/service/crud-service/crud-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _crudService: CrudServiceService) { }

  getProductCart(): Products[] {
    if ("cartProduct" in localStorage) {
      return JSON.parse(localStorage.getItem('cartProduct')!);
    }
    else {
      return [];
    }
  }


  addCarts(request: AddCartRequest): Observable<AddCartRequest> {

    return this._crudService.post<AddCartRequest>('https://fakestoreapi.com/', 'carts', request);

  }
}
