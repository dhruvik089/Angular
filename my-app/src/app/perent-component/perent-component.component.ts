import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perent-component',
  templateUrl: './perent-component.component.html',
  styleUrls: ['./perent-component.component.css']
})
export class PerentComponentComponent implements OnInit {
name ="Perent component";
childName="child-component";

data ={
  name: "",
  age: 0,
  city: ""
}
ngOnInit(): void {
  
  this.data.name = "John Doe";
  this.data.age = 30;
  this.data.city = "New York";
}

 
dataFromChild: string;

  receiveDataFromChild() {
    
    console.log("Receive data from child component");
    
  }

}
