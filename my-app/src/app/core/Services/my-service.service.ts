 import { Injectable } from '@angular/core';  

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  data = {
    Username: '',
    Email: '',
    Password: '',
  };

  getMyData(name: string): string {
    return 'Hello from MyServiceService with' + name;
  }

  async PostApi(api: string): Promise<any> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.data),
      });

      if (response.status === 200) {
        return await response.json();
      }

      if (response.status === 401) {
        return new Error('UnAuthorized');
      }

      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      throw error;
    }
  }

  async getUserList(api: string, token): Promise<any> {
    // eslint-disable-next-line no-useless-catch
    try {
      if (token) {
        const Response = await fetch(api, {
          method: 'GET',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        });

        if (!Response.ok) {
          throw new Error(`HTTP error! status: ${Response.status}`);
        }

        return await Response.json();
      }
      throw new Error('Token not provided');
    } catch (error) {
      throw console.log(error);
    }
  }

  private loginSuccess = false;

  setLoginSuccess(status: boolean) {
    this.loginSuccess = status;
  }

  getLoginSuccess(): boolean {
    return this.loginSuccess;
  }
}
