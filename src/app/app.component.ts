import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-cart';
  constructor(private dataService: DataService) {
  this.dataService.getProducts();
  }

  trackFun(index, item) {
    if (!item) {
      return null;
    } else {
      return item.id;
    }
  }

  addProduct(product) {
    this.dataService.addProduct(product);
  }

  removeProduct(product) {
    this.dataService.removeProduct(product);
  }
}
