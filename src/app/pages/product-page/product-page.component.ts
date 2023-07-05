import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'hello angular!';

  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.loading = true
  //   this.products$ = this.productsService.getAll().pipe(
  //     tap(() => this.loading = false)
  //   )
    this.productsService.getAll().subscribe(products => {

      this.loading = false

    })
  }
}
