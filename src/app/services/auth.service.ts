import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "https://dt207g-moment4-backend.onrender.com/api";

  constructor(private http: HttpClient) { }

  /**
   * Registrerar en användare.
   * @param credentials - ett objekt med användarnamn och lösenord.
   * @returns 
   */
  public register(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.url}/register`, credentials);
  }

  /**
   * Loggar in en användare.
   * @param credentials - ett objekt med användarnamn och lösenord.
   * @returns 
   */
  public login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials);
  }
  /**
   * Lagrar token i localStorage.
   * @param token
   */
  public setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  /**
   * Hämtar token från localStorage.
   * @returns token
   */
  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  /**
   * Raderar token från localStorage.
   */
  public logOut(): void {
    localStorage.removeItem("token");
  }

  /**
   * Kollar om användaren är inloggad.
   * @returns boolean
   */
  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
