import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    readonly URL_DB = 'https://api.mlab.com/api/1/databases/angulardbd/collections/productania';
    readonly param = new HttpParams().set('apiKey', '1zAZlXnu7g9az5AOgv0Ff-oNVErqDpfd');

    constructor(private http: HttpClient) {
        this.getProducts();
    }

    getProducts(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(this.URL_DB, { params: this.param });
    }
    saveProducts(list: Array<Product>) {
        this.http.put(this.URL_DB, list, { params: this.param }).subscribe(data => {
            console.log(data);
        });
    }
    deleteProducts(list: Array<Product>) {
        this.http.put(this.URL_DB, [], { params: this.param }).subscribe(data => {
            console.log(data);
        });

    }
}

