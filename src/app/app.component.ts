import { Component } from '@angular/core';
import { IProduct } from './models/product.model';
import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello angular!';

  products: IProduct[] = data
}


