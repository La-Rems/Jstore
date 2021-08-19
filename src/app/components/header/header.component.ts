import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {Product} from "../../models/product";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import {Subscription} from "rxjs";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: Cart[] = [];
  cartData;
  categories: Category[];
  categorySub: Subscription;
  isAuth: boolean = false;

  constructor(private cartService: CartService, private categoryService: CategoryService, private userService: UsersService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
    this.isAuth = this.userService.isAuth;
    this.categorySub = this.categoryService.categorySubject.subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    )
  }

  logout(){
    this.userService.logout();
    this.isAuth = this.userService.isAuth;
  }
}
