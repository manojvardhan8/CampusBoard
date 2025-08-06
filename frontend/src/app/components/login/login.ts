import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private http: HttpClient,private router:Router,private route:ActivatedRoute,private authService:AuthService) {}
  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)});
  ngOnInit(): void {
    const isLoogedIn = this.authService.getToken()
    if(isLoogedIn) this.router.navigate([''])
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
   
      this.http.post<{token:string;user:any}>('http://localhost:3000/api/users/login', this.loginForm.value)
      .subscribe({
        next: (res) => {
          alert("Login successful!");        
          this.loginForm.reset();
          console.log(res)
          this.authService.login(res.token, res.user);
          // Optionally, redirect to dashboard or perform other actions
          this.router.navigateByUrl(''); // Uncomment if you have a dashboard route
        },
        error: (err) => {
          alert("Error logging in: " + err.error.message);
        }
      });  
    }
  }
}

