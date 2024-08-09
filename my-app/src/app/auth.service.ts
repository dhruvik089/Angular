import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'JWT'; 

  constructor(private cookieService: CookieService,private router:Router) {}

  isAuthenticated(): boolean {
    return this.cookieService.check(this.tokenKey);
  }

  setToken(token: string, days: number): void {
    this.cookieService.set(this.tokenKey, token, days);
  }

  removeToken(): void {
    this.cookieService.delete(this.tokenKey);    
  } 
}
