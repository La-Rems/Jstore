import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { SingleProductComponent } from './components/shop/single-product/single-product.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ModalAddToCartComponent } from './components/shop/modal-add-to-cart/modal-add-to-cart.component';
import { ModalQuickViewComponent } from './components/shop/modal-quick-view/modal-quick-view.component';
import { CategoryComponent } from './components/category/category.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { SliderComponent } from './components/shop/slider/slider.component';
import { ButtonPaypalComponent } from './components/shop/button-paypal/button-paypal.component';
import {NgxPayPalModule} from "ngx-paypal";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ProductsComponent,
    SingleProductComponent,
    CartComponent,
    NotFoundComponent,
    ModalAddToCartComponent,
    ModalQuickViewComponent,
    CategoryComponent,
    CheckoutComponent,
    SliderComponent,
    ButtonPaypalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
