import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from '../../service/products.service';
import { AllProducts, Products } from '../../models/all-products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, OnChanges {

  products: Products[] = [];
  categories: string[] = [];
  cartProduct: Products[] = [];

  isLoading: boolean = false;


  constructor(public translate: TranslateService,
    private _serviceProduct: ProductsService,
  ) { }




  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();

  }

  getProducts() {
    this.isLoading = true;
    this._serviceProduct.getAllProducts().subscribe(response => {
      this.products = response;
      this.isLoading = false;

    });
  }

  getCategories() {
    this.isLoading = true;

    this._serviceProduct.getAllCategories().subscribe(
      {
        next: (response) => {
          this.categories = response;
          console.info(this.categories)
          this.isLoading = false;

        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

  selectedCategory(event: any) {
    let value: string = event.target.value;
    if (value == 'all') {
      this.getProducts();
    }
    else {

      this.getProductsByCategory(value);
    }
  }

  getProductsByCategory(value: string) {
    this.isLoading = true;

    this._serviceProduct.getProductsByCategory(value).subscribe({

      next: (response) => {
        this.products = response;
        this.isLoading = false;

      },

      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  addToCart(event: Products) {
    // console.log(event);
    // localStorage.setItem('cartProduct', JSON.stringify(event));
    if ('cartProduct' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cartProduct')!);
      let exist = this.cartProduct.find(item => item.id == event.id);

      if (exist) {
        alert('Cart product already exists');

      }
      else {
        this.cartProduct.push(event);
        localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));
      }

    }
    else {
      this.cartProduct.push(event);
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));

    }



  }
}
