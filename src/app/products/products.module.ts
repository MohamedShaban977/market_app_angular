import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsProductComponent,
    CardProductComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule,


  ]
})
export class ProductsModule { }
