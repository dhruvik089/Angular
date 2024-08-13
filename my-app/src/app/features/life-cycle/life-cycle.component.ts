import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent {
  construct = '';
  constructor() {
    this.construct = 'This is a constructor';
    console.log('This is a constructor');
  }
}
