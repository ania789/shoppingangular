import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private tasksService: ProductService) {}
  save() {

    this.tasksService.saveProductsInDB();
  }

  ngOnInit() {
  }

}
