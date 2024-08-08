import { Component, inject, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiComponent } from '../api/ApiComponent';
import { MyServiceService } from '../Services/my-service.service'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('myForm', { static: false }) form!: NgForm;
  apiComponent: ApiComponent;
  services: MyServiceService = inject(MyServiceService);
  api = 'http://localhost:51206/api/Register/';

  constructor(private router: Router) {}

  showTable = false;

  data: any = [];

  async ngOnInit() {
    await this.services
      .getUserList(`${this.api}GetAllUser`)
      .then((res) => { 
        this.data = res;
      })
      .catch((err) => console.log('error occurred'));
  }

  obj = {
    username: '',
    Email: '',
    password: '',
  };

  onSubmit() {
    if (this.form && this.form.valid) {
      const objDemo = {
        name: this.form.value.username,
        email: this.form.value.Email,
      };

      this.services.data.Username = this.form.value.username;
      this.services.data.Password = this.form.value.password;
      this.services.data.Email = this.form.value.Email;
      this.services.PostApi(`${this.api}Registration`)
      .then(response =>response.json)
      .catch(error =>console.log(error))
      this.router.navigate(['/services'])
    }
  }

  showDetails() {
    this.showTable = true;
    console.log(this.data);
  }
}
