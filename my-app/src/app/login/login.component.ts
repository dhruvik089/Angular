// import { Component, inject, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { MyServiceService } from '../Services/my-service.service';
// import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   constructor(
//     private myService: MyServiceService,
//     private router: Router,
//     private cookieService: CookieService
//   ) {}

//   private api = 'http://localhost:51206/api/Register/';
//   login(form: NgForm) {
//     this.myService.data.Email = form.value.Email;
//     this.myService.data.Password = form.value.Password;

//     this.myService
//       .PostApi(`${this.api}login`)
//       .then((response) => {
//         response.json;
//         this.removeCookie('JWT');
//         this.setCookie('JWT', response.Token, 5);
//         this.router.navigate(['/Temp']);
//       })
//       .catch((error) => {
//         alert('Something Wrong');
//         console.log(error);
//       });
//   }
//   setCookie(name: string, value: string, days: number): void {
//     this.cookieService.set(name, value, days);
//   }
//   removeCookie(name: string) {
//     if (this.cookieService.get(name) != null) {
//       this.cookieService.delete(name);
//     }
//   }

//   getToken() {
//     if (this.cookieService.get('JWT') != null) {
//       console.log("token already  ")
//       return true;

//     }
//     console.log("No token")
//     return false
//   }
// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../Services/my-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private api = 'http://localhost:51206/api/Register/';

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private authService: AuthService
  ) {
    authService.removeToken();
  }

  login(form: NgForm) {
    this.myService.data.Email = form.value.Email;
    this.myService.data.Password = form.value.Password;
    this.myService
      .PostApi(`${this.api}login`)
      .then((data) => {
        this.authService.setToken(data.Token, 5);
        this.router.navigate(['/Temp']);
      })
      .catch((error) => {
        alert('Something went wrong');
      });
  }
}
