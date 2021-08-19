import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {Product} from "../models/product";
import {Result} from "../models/result";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  numberOfProduct = 12;
  products: Product[]  = [];
  prodSubject = new Subject<Product[]>();
  constructor(private httpClient: HttpClient) {
    this.getProductsFromUrl();
  }

  emitProducts(){
    this.prodSubject.next(this.products)
  }

  getProductsFromUrl(): void{
    const url = `${environment.API + 'products?' + environment.API_KEY}`;
    this.httpClient.get(url).subscribe(
      (dataProducts: Result) => {
        if(dataProducts.status == 200){
          this.products = dataProducts.result;
          this.emitProducts();
        } else {
          console.log('Error : ' + dataProducts.message);
        }
      }
    )
  }

  getProductById(id: number): Product {
    const product = this.products.find(element => element.idProduct == id)
    if(product){
      return product
    }
    return null;
  }

  getProductByPage(numberPage: number): Product[] {
    const numberOfPage = this.products.length/this.numberOfProduct;
    if(numberPage >= 0 && numberPage < numberOfPage) {
      return this.products.slice(numberPage * this.numberOfProduct, (numberPage + 1) * this.numberOfProduct);
    }
    return null;
  }
}
