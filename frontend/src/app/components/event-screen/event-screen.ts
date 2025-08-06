import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../../services/events';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-event-screen',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event-screen.html',
  styleUrl: './event-screen.css'
  
})
export class EventScreen implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,private eventService:Events,private authService:AuthService
    ,private route:Router
  ){}
  event:any;
  user:any;
  loading= signal<boolean>(false);
  isRegistered=signal<boolean>(false);
  
  ngOnInit(): void {
    this.user=this.authService.getUser();
    this.loading.set(true);
    const eventId=this.activatedRoute.snapshot.paramMap.get('id');
    this.eventService.fetchEventById(eventId).pipe(finalize(()=>{this.loading.set(false)})).subscribe({
      next :(data)=>{
        this.event=data;
        const userObj=JSON.parse(this.user);
        if(this.user && this.event.registeredUsers.includes(userObj.id)){this.isRegistered.set(true);}

      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  register(){
    if(!this.user){
      this.route.navigateByUrl('/login');
      return;
    }
    const eventId=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.user !== undefined && eventId){
      this.eventService.addRegisteredUsers(eventId,this.user).subscribe({
        next:(data)=>{
          console.log("success");
          this.isRegistered.set(true);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
  
}
