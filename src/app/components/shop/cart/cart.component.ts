import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {environment} from "../../../../environments/environment";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart[] = []
  prefUrlImage = `${environment.prefUrlImage}`
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
  }

  addProduct(product: Product): void{
    this.cartService.addProductToCart(product)
  }

  deleteProduct(product: Product): void {
    this.cartService.deleteFromCart(product);
  }

}
