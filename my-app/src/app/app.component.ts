import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) { }
 
  data=[
    {name: 'Dhruvik',password:'123'},
    {name: 'RP',password:'123'},
    {name: 'Savan',password:'123'},
    {name: 'Busa',password:'123'}
  ] 
  submitForm(form:NgForm){
  
    if(this.data.find(x=>x.name.toLowerCase===form.value.name.toLowerCase && x.password===form.value.password)){
     this.router.navigate(['Form'],
      {queryParams:{name:form.value.name,password:form.value.password}}
     )
    }else{
      alert('Invalid credentials!');
    }

  }

}
