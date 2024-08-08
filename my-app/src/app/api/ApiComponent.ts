import { Component, Inject, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Services/my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  return_data: string;
  data: null;
  // api = 'https://ipinfo.io/161.185.160.93/geo';
  api = 'http://localhost:55965/api/Product/GetProducts';

  constructor(private serviceDemo: MyServiceService) {
    this.return_data = serviceDemo.getMyData('Dhruvik');
  }

  objData = [];

  MyObservable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    // observer.error(alert('Error genrated'));
    observer.next(4);
    observer.complete();
  });

  ngOnInit(): void {
    this.fetchApiData();
  }

  fetchApiData() {
    this.serviceDemo
      .PostApi(this.api)
      .then((response) => {
        return response;
      })
      .then((data) => {
        this.data = data;
      })
      .catch((error) => console.error('Error:', error));
  }

  isData() {
    if (this.data != null) {
      return true;
    }
    return false;
  }

  onclickbtn() { 
    this.MyObservable.subscribe(
      (val) => console.log(val),
      (error) => console.error(error),
      () => alert('Complete genrated')
    ); 
  }
}
