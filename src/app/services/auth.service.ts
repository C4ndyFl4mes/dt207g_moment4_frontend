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

  public register(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.url}/register`, credentials);
  }

  public login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials);
  }

  public setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  public logOut(): void {
    localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
