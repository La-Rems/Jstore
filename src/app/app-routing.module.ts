import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ShopComponent} from './components/shop/shop.component';
import {CartComponent} from './components/shop/cart/cart.component';
import {SingleProductComponent} from './components/shop/single-product/single-product.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CategoryComponent} from "./components/category/category.component";
import {CheckoutComponent} from "./components/shop/checkout/checkout.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: '', component: ShopComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'single-product/:id', component: SingleProductComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'notFound', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
