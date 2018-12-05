import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/products.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private tasksService: ProductService) { }
  delete() {
    this.tasksService.removeFromDB();
  }

  ngOnInit() {
  }
  reload () {
    this.delete();
    window.location.reload();

  }
}
