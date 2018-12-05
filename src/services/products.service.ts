import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { HttpService } from './http.service';

@Injectable()
export class ProductService {
    productsListObs = new BehaviorSubject <Array<Product>>([]);
    constructor(private httpService: HttpService) {
        this.httpService.getProducts().subscribe(list => {
            this.productsListObs.next(list);
        });
    }
    add(product: Product) {
        const list = this.productsListObs.getValue();
        list.push(product);
        this.productsListObs.next(list);
    }
    remove(product: Product) {
        const list = this.productsListObs.getValue().filter(e => e !== product);
        this.productsListObs.next(list);
    }
    done(product: Product) {
        product.whenBought = new Date().toLocaleDateString();
        product.isBuy = true;
        const list = this.productsListObs.getValue();
        this.productsListObs.next(list);
    }
    getProductsListObs(): Observable<Array<Product>> {
        return this.productsListObs.asObservable();
    }
    saveProductsInDB() {
        this.httpService.saveProducts(this.productsListObs.getValue());
    }
    removeFromDB() {
        this.httpService.deleteProducts(this.productsListObs.getValue());
    }
}
