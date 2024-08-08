import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {
    console.log('this is my service');
  }

  data = {
    Username: '',
    Email: '',
    Password: '',
  };

  getMyData(name: string): string {
    return 'Hello from MyServiceService with' + name;
  }

  async PostApi(api: string): Promise<any> {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.data),
      });
 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(
        'There has been a problem with your fetch operation: ',
        error
      );
      throw error;
    }
  }

  async getUserList(api: string): Promise<any> {
    try{
      const Response = (await fetch(api))

      console.log("Response :-",Response);
      console.log("This is a list of users that have authenticated");
       
      if (!Response.ok) {
        throw new Error(`HTTP error! status: ${Response.status}`);
      }

       return await Response.json();
    }

    catch(error){
      console.error('Error in fetching data: ', error);
      throw error;
    }
  }

  getApiData() {
    const observable = new Observable((obj) => {
      setTimeout(() => {
        obj.next('Data fetched successfully');
      }, 1000);
    });

    observable.subscribe((data) => {
      console.log(data);
      console.log('first');
    });
  }
}
