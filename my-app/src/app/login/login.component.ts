import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../Services/my-service.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private api = 'http://localhost:51206/api/Register/';

  isEmailValid = true;
  isPasswordValid = true;

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    authService.removeToken();
  }

  login(form: NgForm) {
    this.isEmailValid = true;
    this.isPasswordValid = true;

    if (form.value.Email == '' || form.value.Password == '') {
      if (form.value.Email == '') this.isEmailValid = false;
      if (form.value.Password == '') this.isPasswordValid = false;

      return;
    }

    this.myService.data.Email = form.value.Email;
    this.myService.data.Password = form.value.Password;

    this.myService
      .PostApi(`${this.api}login`)
      .then((data) => {
        this.authService.setToken(data.Token, 5);
        this.router.navigate(['/Temp']);
      })
      .catch((error) => {
        this.toastr.error('Failed to login');
      });
  }
}
