import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUrl = 'https://clips-application.el.r.appspot.com/api/';
  // baseUrl = 'https://100774aa0020.ngrok.io/api/';
  constructor(private http: HttpClient) {}

  dec2hex(dec: any) {
    return dec.toString(16).padStart(2, '0');
  }

  generateId(len: any) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join('');
  }

  getId() {
    return `${this.generateId(8)}-${this.generateId(4)}-${this.generateId(
      4
    )}-${this.generateId(4)}-${this.generateId(12)}`;
  }

  get(path: string): Observable<any | undefined> {
    return this.http.get(this.baseUrl + path);
  }

  put(path: string, body: any): Observable<any | undefined> {
    return this.http.put(this.baseUrl + path, body);
  }

  post(path: string, body: any): Observable<any | undefined> {
    return this.http.post(this.baseUrl + path, body);
  }

  delete(path: string): Observable<any | undefined> {
    return this.http.delete(this.baseUrl + path);
  }
}
