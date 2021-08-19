import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage;

  constructor(private userService: UsersService, private formBuilder: FormBuilder, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void{
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.email),
      password: this.formBuilder.control('', Validators.minLength(6))
    });
  }

  onSubmit(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const newUser: User = {email: email, password: password};
    this.userService.authentifier(newUser).then(
      (data) => {
        const cart = this.cartService.cart;
        if(cart.length){
          this.router.navigate(['/checkout']);
        } else {
          this.router.navigate(['/shop']);
        }

      }
    ).catch((error) => {
      this.errorMessage = error;
      setTimeout(() => this.errorMessage = null, 3000)
    })
  }

}
