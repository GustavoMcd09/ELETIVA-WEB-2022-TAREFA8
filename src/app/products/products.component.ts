import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { PRODUCTS } from '../mock-products';
import { QTDCOD } from '../products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct?: Product;
  
  products2: QTDCOD = {
    qtd: 100,
    cod: 1029
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}