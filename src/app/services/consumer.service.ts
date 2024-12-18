import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  baseUrl: string = 'http://localhost:4000/';
  constructor(private _http: HttpClient) {}

  fetch<T>(endpoint: string, id: any = 0): Observable<T> {
    return id == 0
      ? this._http.get<T>(`${this.baseUrl}${endpoint}`)
      : this._http.get<T>(`${this.baseUrl}${endpoint}/${id}`);
  }
  add<T>(endpoint: string, body: any): Observable<T> {
    return this._http.post<T>(`${this.baseUrl}${endpoint}`, body);
  }
  update<T>(endpoint: string, body: any, id: any): Observable<T> {
    return this._http.put<T>(`${this.baseUrl}${endpoint}/${id}`, body);
  }
  remove<T>(endpoint: string, id: any): Observable<T> {
    return this._http.delete<T>(`${this.baseUrl}${endpoint}/${id}`);
  }

   }

