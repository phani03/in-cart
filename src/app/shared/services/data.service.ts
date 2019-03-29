import { Injectable } from '@angular/core';
import {product} from '../../shared/interface' 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products;
  cartList: product[] = [];
  totalValue = 0;
  constructor(private httpClient: HttpClient) {

  }
  getProducts() {
    this.httpClient
        .get('./assets/sample.json').subscribe((res) => {
          this.products = res;
        }, (error) => {
          this.products = [];
        });
  }

  addProduct(product) {
    this.cartList.push(product);
    product.cart = true;
    this.CalTotalValue();
  }

  removeProduct(product) {
    const index = this.cartList.findIndex((item) => item === product);
    this.cartList.splice(index, 1);
    product.cart  = false;
    this.CalTotalValue();
  }

  CalTotalValue() {
    this.totalValue = this.cartList.reduce((prev, product) => prev + product.price , 0);
  }

}
