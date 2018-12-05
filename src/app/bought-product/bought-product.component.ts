import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-bought-product',
  templateUrl: './bought-product.component.html',
  styleUrls: ['./bought-product.component.css']
})
export class BoughtProductComponent implements OnInit {

  productBought: Array<Product> = [];
  constructor(private productService: ProductService) {
    this.productService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productBought = products.filter(t => t.isBuy === true);
    });
   }

  ngOnInit() {
  }

}
