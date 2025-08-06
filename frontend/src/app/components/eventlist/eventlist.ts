import { Component, signal } from '@angular/core';
import { Eventcard } from '../eventcard/eventcard';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Events } from '../../services/events';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { FilterDialog } from '../filter-dialog/filter-dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventlist',
  imports: [Eventcard,CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule,MatPaginator],
  templateUrl: './eventlist.html',
  styleUrl: './eventlist.css'
})
export class Eventlist {
  events: any[] = [];
  filteredEvents: any[] = [];
  eventsPerPage:any[]=[];
  totalEvents=0;
  pagesize=9;
  currentPage=0;
  constructor(public eventService:Events,public dialogBox:MatDialog,private authService:AuthService,private route:Router) {}
  filterTitle: string = '';
  filterRegister: string = "all"; 
  loading= signal<boolean>(false)
  dialog=signal<boolean>(false)
  ngOnInit() {
    this.loading.set(true);
      this.eventService.fetchEvents().pipe(finalize(()=>{this.loading.set(false)})).subscribe({
        next: (data)=>{
          this.events=data;
          this.filteredEvents=[...this.events];
          this.totalEvents=this.filteredEvents.length;
          this.updatePagination();
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
  updatePagination(){
    const start=this.pagesize * this.currentPage;
    const end=start + this.pagesize;
    this.eventsPerPage=this.filteredEvents.slice(start,end);
  }
  OnPageChange(e:PageEvent){
    this.pagesize=e.pageSize;
    this.currentPage=e.pageIndex;
    this.updatePagination();
  }
  openDialog(){
    const user=this.authService.getUser();
    if(!user){
      this.route.navigateByUrl('login');
      return ;
    }
    const userObj=JSON.parse(user);
    const userId=userObj.id;
    const dialogRef = this.dialogBox.open(FilterDialog, {
      width: '400px',
      data: { register: this.filterRegister ,selection:"event"}
    });
    this.dialog.set(true);
    dialogRef.afterClosed().pipe(finalize(()=>{this.dialog.set(false)})).subscribe(result => {
      if (result) {
        this.filterRegister = result.register;
        console.log('Dialog result:', this.filterRegister);
        if(this.filterRegister==='registered'){
          const temp=this.events.filter(event => {return event.registeredUsers.includes(userId)});
        this.filteredEvents = [
          ...temp
        ]
        }
        else if(this.filterRegister==='not registered'){
          const temp=this.events.filter(event => {return !event.registeredUsers.includes(userId)});
        this.filteredEvents = [
          ...temp
        ]
        }
        else{
          this.filteredEvents=this.events;
        }
        this.totalEvents = this.filteredEvents.length;
        this.currentPage = 0; 
        this.updatePagination();
      }
    });
  }
  searchNotices(searchTerm: any) {
    this.filterTitle = searchTerm.value.toLowerCase();  
    this.filteredEvents = this.events.filter(event => 
      event.title.toLowerCase().startsWith(this.filterTitle)
    );
    this.totalEvents=this.filteredEvents.length;
    this.currentPage=0;
    this.updatePagination();

  }
}


