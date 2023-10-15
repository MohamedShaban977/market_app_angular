import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/models/all-products';
import { CartsService } from '../../service/carts.service';
import { TranslateService } from '@ngx-translate/core';
import { AddCartRequest } from '../../models/add-cart-request';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  productCart!: Products[];
  total: number = 0;
  isLoading = false;
  success: boolean = false;

  constructor(private service: CartsService, public translate: TranslateService) { }
  ngOnInit(): void {

    this.productCart = this.service.getProductCart();

    this.getCartTotal()
  }

  getCartTotal() {

    this.total = 0;

    for (let i in this.productCart) {
      this.total += this.productCart[i].price * this.productCart[i].quantity;

    }

  }

  plusAmount(index: number) {
    this.productCart[index].quantity++;
    this.getCartTotal();
    localStorage.setItem('cartProduct', JSON.stringify(this.productCart));
  }
  detectChange(event: any, index: number) {
    this.productCart[index].quantity = +event.target.value;
    this.getCartTotal();
    localStorage.setItem('cartProduct', JSON.stringify(this.productCart));
  }
  minsAmount(index: number) {
    this.productCart[index].quantity--;
    this.getCartTotal();
    localStorage.setItem('cartProduct', JSON.stringify(this.productCart));
  }

  deleteProduct(index: number) {
    this.productCart.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cartProduct', JSON.stringify(this.productCart));
  }

  deleteAllProductsToCart() {
    localStorage.removeItem('cartProduct');
    this.getCartTotal();
    this.productCart = [];
  }

  addCarts() {
    this.isLoading = true;
    let carts = this.productCart.map(item => {
      return {
        "productId": item.id,
        "quantity": item.quantity,
      }
    });

    let request: AddCartRequest = {
      userId: 123,
      date: new Date(),
      products: carts,
    };

    this.service.addCarts(request).subscribe({
      next: (value) => {
        console.log(value);
        this.isLoading = false;
        this.success = true;
      },
      error: (err) => {
        this.isLoading = false;
        this.success = false;
        console.log(err);
      },
    });
  }

}
