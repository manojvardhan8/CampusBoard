import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  loggedIn = false;
  isAdmin = false;

  constructor(private authservice:AuthService,private router: Router) {}

  ngOnInit(): void {
    this.authservice.isLoggedIn$.subscribe(status => this.loggedIn = status);
    this.authservice.isAdmin$.subscribe(status => this.isAdmin = status);
  }

  
  logout(): void {
    this.authservice.logout();
    this.router.navigateByUrl('');
  }
}