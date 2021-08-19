import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartService} from "./cart.service";
import {User} from "../models/user";
import {Cart} from "../models/cart";
import {environment} from "../../environments/environment.prod";
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient, private cartService: CartService) { }

  createOrder(user: User, cart: Cart[]){
    return new Promise(
      (resolve, reject) => {
        cart.forEach((data) => {
          const price = data.number * data.product.price;
          const url = `${environment.API + 'createOrders.php?' + environment.API_KEY}` + '&idUser=' + user.idUser + '&idProduct=' + data.product.idProduct + '&quantity=' + data.number + '&price=' + price;

          this.httpClient.get(url).subscribe(
            (response: Result) => {
              if(response.status == 200){
                this.cartService.removeElementOfCart(0);
                if(cart.length == 0){
                  resolve(true);
                }
              }
            },
            (error) => {
              reject("Error : " + error)
            }
          )
        })
      }
    )
  }
}
