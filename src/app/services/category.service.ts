import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Result} from "../models/result";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];
  categorySubject = new Subject<Category[]>();
  constructor(private httpClient: HttpClient) {
    this.getCategoryFromServer();
  }

  emitCategory(): void{
    this.categorySubject.next(this.categories)
  }

  getCategoryFromServer(): void {
    const url = `${environment.API + 'category?' + environment.API_KEY}`;
    this.httpClient.get(url).subscribe(
      (response: Result) => {
        if(response.status == 200){
          this.categories = response.result;
          this.emitCategory();
        } else {
          console.log(response.message);
        }
      }
    )
  }
}
