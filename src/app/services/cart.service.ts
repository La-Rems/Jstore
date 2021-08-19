import { Injectable } from '@angular/core';
import {Cart} from "../models/cart";
import {Product} from "../models/product";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[];
  cartData = {len: 0, cost:0};
  constructor() {
    this.initCart();
  }

  initCart(): void {
    if(typeof(localStorage) !== "undefined"){
      const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const cartDataLocalStorage = JSON.parse(localStorage.getItem('cartData'));
      this.cart = cartLocalStorage ? cartLocalStorage : [];
      this.cartData = cartDataLocalStorage ? cartDataLocalStorage : {len: 0, cost:0};
    } else {
      this.cart = [];
      this.cartData = {len: 0, cost:0};
    }
  }

  addProductToCart(productToAdd: Product): void{
    const checkedProduct = this.cart.find(element => element.product == productToAdd);
    if(checkedProduct){
      checkedProduct.number++;
    } else {
      const newProductToAdd = {
        number: 1,
        product: productToAdd
      };
      this.cart.push(newProductToAdd);
    }
    this.updateDataCart();
  }

  deleteFromCart(productToDelete: Product): void {
    const indexProduct = this.cart.findIndex(element => element.product == productToDelete);

    if(indexProduct !== -1){
      if(this.cart[indexProduct].number > 1){
        this.cart[indexProduct].number--;
      } else {
        this.cart.splice(indexProduct, 1);
      }
    }
    this.updateDataCart();
  }

  updateDataCart(): void{
    let length = 0;
    let cost = 0;
    this.cart.forEach(element => {
      length += element.number;
      cost += element.product.price * element.number;
    })
    this.cartData.len = length;
    this.cartData.cost = cost;
    if(typeof(localStorage) !== "undefined"){
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cartData", JSON.stringify(this.cartData));
    }
  }

  removeElementOfCart(index: number){
    this.cart.splice(index, 1);
    this.updateDataCart();
  }
}


