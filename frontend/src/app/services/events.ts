import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Events {
  constructor(private http:HttpClient){}
  baseUrl:String = 'http://localhost:3000/api'
  fetchEvents():Observable<any[]>{
      return this.http.get<any []>(`${this.baseUrl}/events`);
  }
  fetchRecentEvents():Observable<any[]>{
    return this.http.get<any []>(`${this.baseUrl}/events/recent`);
  }
  fetchEventById( id : string|null) : Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/events/event/${id}`)
  }
  addRegisteredUsers(eventid : string|null,user :any):Observable<any>{
    const userObj = JSON.parse(user);
    return this.http.post(`${this.baseUrl}/events/event/${eventid}`,{userId:userObj.id});
  }
  
}
