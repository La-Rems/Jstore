import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  successMessage;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      sexe: this.formBuilder.control('', [Validators.required]),
      pseudo: this.formBuilder.control('', [Validators.required]),
      lastname: this.formBuilder.control('', [Validators.required]),
      firstname: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      dateBirth: this.formBuilder.control('', [Validators.required]),
    })
  }

  onSubmit(): void {
    const sexeUser = this.registerForm.get('sexe').value;
    const pseudoUser = this.registerForm.get('pseudo').value;
    const lastnameUser = this.registerForm.get('lastname').value;
    const firstnameUser = this.registerForm.get('firstname').value;
    const emailUser = this.registerForm.get('email').value;
    const passwordUser = this.registerForm.get('password').value;
    const dateBirthUser = this.registerForm.get('dateBirth').value;
    const newUser: User = {
      sexe: sexeUser,
      firstname: firstnameUser,
      lastname: lastnameUser,
      email: emailUser,
      password: passwordUser,
      dateBirth: dateBirthUser,
      pseudo: pseudoUser
    };
    this.userService.createUser(newUser).then(
      (data) => {
        this.errorMessage = null;
        this.successMessage = data;
        setTimeout(()=> {
          this.successMessage = null;
        this.router.navigate(['/shop']);
        }, 2000)
      })
      .catch((error) => {
        this.errorMessage = error;
        setTimeout(() => this.errorMessage = null, 3000)
      })
  }

}
