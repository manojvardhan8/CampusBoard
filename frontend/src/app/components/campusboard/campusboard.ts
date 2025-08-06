import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Noticecard } from '../noticecard/noticecard';
import { Eventcard } from "../eventcard/eventcard";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { finalize, Observable } from 'rxjs';
import { Notices } from '../../services/notices';
import { Events } from '../../services/events';

@Component({
  selector: 'app-campusboard',
  imports: [Noticecard, Eventcard,RouterLink,CommonModule],
  templateUrl: './campusboard.html',
  styleUrl: './campusboard.css',
})
export class Campusboard implements OnInit{
  notices: any[]=[];
  events: any[]=[];
  nloading=signal<boolean>(false);
  eloading=signal<boolean>(false);
  constructor(public noticesService: Notices,public eventService:Events) {}
  
    ngOnInit() {
      this.nloading.set(true);
      this.noticesService.fetchRecentNotices().pipe(finalize(()=>{this.nloading.set(false)})).subscribe({
        next: (data)=>{
          this.notices = data;
        },
        error:(err)=>{
          console.log(err);
        }
      });
      this.eloading.set(true);
      this.eventService.fetchRecentEvents().pipe(finalize(()=>{this.eloading.set(false)})).subscribe({
        next: (data)=>{
          this.events = data;
        },
        error:(err)=>{
          // console.log('hii');
          console.log(err);
        }
      })
    }
    
}
