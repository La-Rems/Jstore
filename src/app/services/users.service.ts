import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Result} from "../models/result";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  isAuth: boolean = false;
  userSubject = new Subject<User>()

  constructor(private httpClient: HttpClient) { }

  emitUser(): void{
    this.userSubject.next(this.user);
  }

  authentifier(newUser: User){
    return new Promise(
      (resolve,reject) => {
        const url = `${environment.API + 'authentifier.php?' + environment.API_KEY}` + '&email=' + newUser.email + '&password=' + newUser.password;
        this.httpClient.get(url).subscribe(
          (data: Result) => {
            if(data.status == 200){
              this.user = data.args ;
              this.isAuth = true;
              this.emitUser();
              resolve(data.result);
            } else {
              console.log(data.result)
              reject(data.message);
            }
          }, (error) => {
            console.log("Error : " + error)
            reject(false);
          }
        )
      }
    )
  }

  createUser(newUser: User){
    return new Promise(
      (resolve,reject) => {
        const url = `${environment.API + 'createUser.php?' + environment.API_KEY}` + '&email=' + newUser.email + '&password=' + newUser.password + '&sexe=' + newUser.sexe + '&firstname=' + newUser.firstname + '&lastname=' + newUser.lastname + '&dateBirth=' + newUser.dateBirth + '&pseudo=' + newUser.pseudo;
        this.httpClient.get(url).subscribe(
          (data: Result)=> {
            if(data.status == 200){
              this.authentifier(newUser);
              resolve(data.result);
            } else {
              reject(data.message)
            }
          }, (error) => {
            reject(error);
          }
        )
      }
    )
  }

  logout(){
    this.user = null;
    this.isAuth = false;
    this.userSubject = new Subject<User>();
  }
}
