import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { MyServiceService } from '../../core/Services/my-service.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent {
  @ViewChild('Myform') form!: NgForm;
  @ViewChildren('temp') temp!: QueryList<ElementRef>;
  @ViewChild('temp') singleRef!: ElementRef;
 
  constructor(
    private toastr: ToastrService,
    private myService: MyServiceService
  ) {
    if (this.myService.getLoginSuccess()) {
      this.toastr.success('Login successfully!');
      this.myService.setLoginSuccess(false);
    }
  }
}
