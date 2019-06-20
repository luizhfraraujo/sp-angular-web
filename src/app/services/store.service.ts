import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public url = 'http://localhost:3333/api';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = localStorage.getItem('petshop.token');
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }
}
