import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  add() {
    const product: Product = ({name: this.newProduct, whenBought: new Date().toLocaleString(), isBuy: false});
    this.productService.add(product);
    this.newProduct = '';
  }

}
