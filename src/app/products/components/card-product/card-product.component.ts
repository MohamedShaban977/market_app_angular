import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../../models/all-products';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() data!: Products;
  @Output() itemClick = new EventEmitter();
  // @Output() quantity: EventEmitter<number> = new EventEmitter<number>();



  constructor() {

  }
  ngOnInit(): void {
    this.data.quantity = 1;

  }

  add() {
    this.itemClick.emit(this.data);
  }

  incrementClick() {
    this.data.quantity++;
  }

  decrementClick() {


    this.data.quantity--;
  }



}
