import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-eventform',
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './eventform.html',
  styleUrl: './eventform.css'
})
export class Eventform {
  constructor(public http:HttpClient){}
  form=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl(''),
    eventDate:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),
  });
  save(){
    if(this.form.valid){
      
      const user = localStorage.getItem('user');
      const userId = user ? JSON.parse(user).id : null;
     
      const eventData = {
        title: this.form.value.title,
        description: this.form.value.description,
        date: this.form.value.eventDate,
        location:this.form.value.location,
        registeredUsers:[],
        createdBy: userId
      };
      console.log(eventData);
      this.http.post('http://localhost:3000/api/events/create', eventData).subscribe({
        next: (res) => {
          alert("Event created successfully!");
          this.form.reset();
        },
        error: (err) => {
          console.log('Error creating event:', err);
          alert("Error creating event: " + err.error.message);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
