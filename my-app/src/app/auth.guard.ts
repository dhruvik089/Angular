import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './Services/auth.service'; // Import AuthService
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  jwtToken: string = this.cookieService.get('JWT');

  canActivate(): boolean {
    if (
      this.authService.isAuthenticated() &&
      this.authService.decodeToken(this.jwtToken)
    ) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
