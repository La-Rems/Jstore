import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../models/product";
import {environment} from "../../../../environments/environment";
import {CartService} from "../../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  product: Product;
  prefUrlImage = `${environment.prefUrlImage}`;
  productSub: Subscription;

  constructor(private route : ActivatedRoute, private productService: ProductsService, private cartService : CartService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    const id = +this.route.snapshot.params['id'];
    this.productSub = this.productService.prodSubject.subscribe(
      (data: Product[]) => {
        this.product = this.productService.getProductById(id);
      }
    );
    this.productService.emitProducts();
  }

  addCart(product: Product): void {
    this.cartService.addProductToCart(product)
  }

}
