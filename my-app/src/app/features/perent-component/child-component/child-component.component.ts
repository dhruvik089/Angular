import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input() child = {
    name: '',
    age: 0,
    city: '',
  };
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent() {
    console.log(this.child);
    // Example: sending a string 'Hello' to the parent
    this.dataToParent.emit();
  }
}
