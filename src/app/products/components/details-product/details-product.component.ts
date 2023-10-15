import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../models/all-products';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  productDetails!: Products;
  isLoading: boolean = false;

  id!: number;
  constructor(public translate: TranslateService, private route: ActivatedRoute,
    private _service: ProductsService) {
    this.id = +route.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.getProductDetailsById(this.id);


  }


  getProductDetailsById(id: number) {
    this.isLoading = true
    this._service.getProductDetailsById(id).subscribe({
      next: (value) => {
        this.productDetails = value;
        this.isLoading = false

      },
    });

  }

}
