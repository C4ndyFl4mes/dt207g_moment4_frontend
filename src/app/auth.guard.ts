import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {}

  /**
   * Skyddar routes.
   * @returns Om användaren har tillgång till skyddad route, annars skickas man till en annan sida.
   */
  canActivate(): Observable<boolean | UrlTree> {
    const token = this.auth.getToken();
    if (!token) {
      return of(this.router.createUrlTree(['/forbidden']));
    }

    return this.http.get<{ valid: boolean }>('https://dt207g-moment4-backend.fly.dev/api/verify', {
      headers: {
        "content-type": "application/xml",
        "authorization": `Bearer ${token}`
      }
    }).pipe(
      map(response => {
        return response.valid
          ? true
          : this.router.createUrlTree(['/forbidden']);
      }),
      catchError(() => {
        return of(this.router.createUrlTree(['/forbidden']));
      })
    );
  }
}
