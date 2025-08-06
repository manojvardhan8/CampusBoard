import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink,],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private authServices : AuthService) { }
  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    const isLoggedIn = this.authServices.getToken()
    if(isLoggedIn) this.router.navigate([''])


  }
  onSubmit(): void {
    if (this.signupForm.valid) {
      const { name, email, password, confirmPassword } = this.signupForm.value;
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Send to backend here
      this.http.post('http://localhost:3000/api/users/signup', this.signupForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert("User registered successfully!");
            this.signupForm.reset();
            // localStorage.setItem('token', res.token);
            // localStorage.setItem('user', JSON.stringify(res.user));
            // Optionally, redirect to login page or perform other actions
            this.router.navigateByUrl(''); // Uncomment if you have a login route   

          },
          error: (err) => {
            alert("Error registering user: " + err.error.message);
          }
        });
    }
  }
}
