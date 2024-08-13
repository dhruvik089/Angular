import { Component, inject, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiComponent } from '../api/ApiComponent';
import { MyServiceService } from '../../core/Services/my-service.service';
import {config} from '../../Config/config'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) form!: NgForm;
  apiComponent: ApiComponent;
  services: MyServiceService = inject(MyServiceService);
 
  RegisterApi =config.LoginRegister;
  UserApi = config.GetUser;

  constructor(private router: Router) {}

  data = [];

  async ngOnInit() {
    await this.services
      .getUserList(`${this.UserApi}GetAllUser`)
      .then((res) => {
        this.data = res;
      })
      .catch((err) => console.log('error occurred', err));
  }

  obj = {
    username: '',
    Email: '',
    password: '',
  };

  onSubmit() {
    if (this.form && this.form.valid) {
      this.services.data.Username = this.form.value.username;
      this.services.data.Password = this.form.value.password;
      this.services.data.Email = this.form.value.Email;

      console.log(this.services.data);
      console.log(this.RegisterApi);

      this.services
        .PostApi(`${this.RegisterApi}Registration`)
        .then((response) => {
          response.json;
        })
        .catch((error) => console.log(error));
      this.router.navigate(['/Login']);
    }
  }
}
