import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notices {
  constructor( private http: HttpClient) {}
  fetchNotices() : Observable<any[]>{
    return this.http.get<any []>('http://localhost:3000/api/notices');
  }
  fetchRecentNotices():Observable<any[]>{
    return this.http.get<any []>('http://localhost:3000/api/notices/recent');
  }
  
  
}
