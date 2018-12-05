import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  value = 50;
  productsBuy: Array<Product>;
  productsAdd: Array<Product>;
  constructor(private productService: ProductService) {
    this.productService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsBuy = products.filter(t => t.isBuy === true);
    });
    this.productService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsAdd = products.filter(t => t.isBuy === false);
    });
  }
  getPercent () {
      return (this.productsBuy.length / this.productsAdd.length) * 100;
  }
  getTotal() {
    return this.productsAdd.length;
  }
  getNotBuy() {
    return this.productsBuy.length;
  }



  ngOnInit() {
  }

}
