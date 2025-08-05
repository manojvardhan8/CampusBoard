import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Events {
  constructor(private http:HttpClient){}
  
  fetchEvents():Observable<any[]>{
      return this.http.get<any []>('http://localhost:3000/api/events');
  }
  fetchRecentEvents():Observable<any[]>{
    return this.http.get<any []>('http://localhost:3000/api/events/recent');
  }
}
