import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {OrdersService} from "../../../services/orders.service";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart[];
  cartData;

  constructor(private cartService: CartService, private orderService: OrdersService, private userService: UsersService) {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
  }

  ngOnInit(): void {

  }

}
