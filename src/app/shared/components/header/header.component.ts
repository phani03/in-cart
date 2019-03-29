import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  address: string = '';
  cartOpen: boolean = false;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  addProduct(product) {
    this.dataService.addProduct(product);
  }

  removeProduct(product) {
    this.dataService.removeProduct(product);
  }

  placeOrder() {
    window.alert('order placed');
    this.dataService.cartList = [];
    this.dataService.totalValue = 0;
    this.cartOpen = false;
    this.dataService.products.map((product) => {
      product.cart = false;
    });
  }
}
