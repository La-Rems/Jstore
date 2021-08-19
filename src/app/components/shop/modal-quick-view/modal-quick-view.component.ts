import { Component, Input, OnInit } from '@angular/core';
import {Product} from "../../../models/product";
import {environment} from "../../../../environments/environment";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-modal-quick-view',
  templateUrl: './modal-quick-view.component.html',
  styleUrls: ['./modal-quick-view.component.css']
})
export class ModalQuickViewComponent implements OnInit {

  @Input() products: Product[];
  prefUrlImage = `${environment.prefUrlImage}`
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProduct(product: Product): void {
    this.cartService.addProductToCart(product);
  }

}
