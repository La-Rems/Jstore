import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products = [];
  prodSub: Subscription;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.prodSub = this.productService.prodSubject.subscribe(
      (data) => {
        this.products = this.productService.getProductByPage(0);
      }
    );
    this.productService.emitProducts()
  }

}
