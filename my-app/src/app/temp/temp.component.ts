import { Component, ElementRef, QueryList, ViewChild, ViewChildren, } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})


export class TempComponent {

  @ViewChild('Myform') form!: NgForm;
  @ViewChildren('temp') temp!: QueryList<ElementRef>;
  @ViewChild('temp') singleRef!: ElementRef;

  data: any = []

  obj = {
    name: '',
    email: '',
  }

  constructor(private authService: AuthService,private cookieService: CookieService) {}
  payload: any;
  ngOnInit(): void {
    const token = this.cookieService.get('JWT')
    this.payload = this.authService.decodeToken(token);
    console.log("Play LOads", this.payload);
    
    console.log('Email :-', this.payload.jku);
    console.log('Password :-', this.payload.Jwk);
  }

  clickBtn() {
    console.log("this is viewchild example");

    console.log(this.singleRef.nativeElement.value)

    console.log("this is viewchildren example");

    this.temp.forEach(element => {
      console.log(element.nativeElement.value)
    });

  }

  onsubmit() {
    if (this.form && this.form.valid) {

      const objDemo = {
        name: this.form.value.name,
        email: this.form.value.email
      }

      console.log("firstName", this.obj.name);
      this.data.push(objDemo)
      console.log(this.data)
    }
  }
}

