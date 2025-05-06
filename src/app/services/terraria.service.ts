import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boss } from '../models/boss';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TerrariaService {
  private url: string = "https://dt207g-moment4-backend.fly.dev/api";

  constructor(private http: HttpClient) { }

  getData(token: string): Observable<Data> {
    return this.http.get(`${this.url}/terraria_bosses`, {
      headers: {
        "content-type": "application/xml",
        "authorization": `Bearer ${token}`
      }
    });
  }
}
