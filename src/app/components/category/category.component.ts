import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {request} from "https";
import {ProductsService} from "../../services/products.service";
import {Subscription} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  products: Product[];
  productSub: Subscription;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (request) => {
        console.log(request.id);
        this.productSub = this.productService.prodSubject.subscribe(
          (data: Product[]) => {
            const prod = data.filter(product => {
              return product.Category == +request.id;
            });
            this.products = prod
          }
        );
        this.productService.emitProducts()
      }
    );
  }

  ngOnDestroy() {
    this.productSub.unsubscribe()
  }

}
