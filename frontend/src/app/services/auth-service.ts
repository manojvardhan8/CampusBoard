import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  private isAdmin = new BehaviorSubject<boolean>(localStorage.getItem('role') === 'admin');

  isLoggedIn$ = this.loggedIn.asObservable();
  isAdmin$ = this.isAdmin.asObservable();

  login(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('role', user.role);
    localStorage.setItem('user' , JSON.stringify(user))
    this.loggedIn.next(true);
    this.isAdmin.next(user.role === 'admin');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user')
    this.loggedIn.next(false);
    this.isAdmin.next(false);
  }
}
