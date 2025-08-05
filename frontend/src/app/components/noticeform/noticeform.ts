import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-noticeform',
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './noticeform.html',
  styleUrl: './noticeform.css'
})
export class Noticeform {
  constructor(private http:HttpClient){}
  form=new FormGroup({
    title:new FormControl('title',Validators.required),
    content:new FormControl('',[Validators.maxLength(200)]),
    category:new FormControl('',Validators.required)
  })
  save(){
    
    if(this.form.valid){
      
      const user = localStorage.getItem('user');
      const userId = user ? JSON.parse(user).id : null;
     
      const noticeData = {
        title: this.form.value.title,
        content: this.form.value.content,
        category: this.form.value.category,
        postBy: userId
      };
      
      this.http.post('http://localhost:3000/api/notices/create', noticeData).subscribe({
        next: (res) => {
          alert("Notice created successfully!");
          this.form.reset();
        },
        error: (err) => {
          console.error('Error creating notice:', err);
          alert("Error creating notice: " + err.error.message);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}