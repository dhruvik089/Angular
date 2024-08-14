import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { config } from '../../Config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'JWT';
  constructor(private cookieService: CookieService) {}

  isAuthenticated(): boolean {
    return this.cookieService.check(this.tokenKey);
  }

  setToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
    config.JWTToken = token;
  }

  removeToken(): void {
    this.cookieService.delete(this.tokenKey);
  }

  decodeToken(token) {
    const decodedToken = jwt_decode.jwtDecode(token);

    const expiryTimeInSeconds = decodedToken.exp;

    if (expiryTimeInSeconds) {
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);

      if (expiryTimeInSeconds - currentTimeInSeconds <= 0 && (token===config.JWTToken) ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

 
}
