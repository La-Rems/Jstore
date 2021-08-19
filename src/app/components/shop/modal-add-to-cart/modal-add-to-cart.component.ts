import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-modal-add-to-cart',
  templateUrl: './modal-add-to-cart.component.html',
  styleUrls: ['./modal-add-to-cart.component.css']
})
export class ModalAddToCartComponent implements OnInit {

  @Input() products: Product[];
  prefUrlImage = `${environment.prefUrlImage}`
  constructor() { }

  ngOnInit(): void {
  }

}
