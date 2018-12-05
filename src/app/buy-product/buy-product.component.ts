import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  productsList: Array<Product> = [];
  constructor(private productService: ProductService) {
    this.productService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsList = products.filter(t => t.isBuy === false);
    });
   }

  ngOnInit() {
  }
  done(task: Product) {
    this.productService.done(task);
  }
  remove(task: Product) {
    this.productService.remove(task);
  }
  getColor (): string {
    return this.productsList.length >= 5 ? 'red' : 'green';
  }

}
