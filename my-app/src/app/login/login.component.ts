import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from '../Services/my-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private myService: MyServiceService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  private api = 'http://localhost:51206/api/Register/';
  public Token;
  login(form: NgForm) {
    this.myService.data.Email = form.value.Email;
    this.myService.data.Password = form.value.Password;

    this.myService
      .PostApi(`${this.api}login`)
      .then((response) => {
        response.json;
        this.Token = response.Token;
        this.removeCookie('JWT')
        this.setCookie('JWT', this.Token, 5);
        this.router.navigate(['/Temp']);
      })
      .catch((error) => {
        alert('Something Wrong');
        console.log(error);
      });
  }
  setCookie(name: string, value: string, days: number): void {
    this.cookieService.set(name, value, days);
  }
  removeCookie(name: string) {
    if (this.cookieService.get(name) != null) {
      this.cookieService.delete(name);
    }
  }  
}
