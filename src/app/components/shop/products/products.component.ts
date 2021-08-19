import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../../services/products.service";
import { Product } from "../../../models/product";
import {environment} from "../../../../environments/environment";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() isPaginate: boolean = true;
  prefUrlImage = `${environment.prefUrlImage}`
  prodSub: Subscription;
  currentPage = 0;
  pages = [0, 1, 2, 3, 4, 5];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void{
    this.cartService.addProductToCart(product);
  }

  deleteToCart(product: Product):void {
    this.cartService.deleteFromCart(product)
  }

  changePage(numberPage: number): void{
    const prod = this.productService.getProductByPage(numberPage);
    if(prod){
      this.products = prod;
      this.currentPage = numberPage;
    }
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage + 1;
    const prod = this.productService.getProductByPage(newCurrentPage);
    if(prod){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }
  }

  previousPage(): void{
    const newCurrentPage = this.currentPage - 1;
    const prod = this.productService.getProductByPage(newCurrentPage);
    if(prod){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }
  }

}
