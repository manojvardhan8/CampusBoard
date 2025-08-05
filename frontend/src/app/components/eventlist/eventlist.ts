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
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-eventlist',
  imports: [Eventcard,CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule,MatPaginator],
  templateUrl: './eventlist.html',
  styleUrl: './eventlist.css'
})
export class Eventlist {
  events: any[] = [];
  filteredEvents: any[] = [];
  

  constructor(public eventService:Events,public dialogBox:MatDialog) {}
  filterTitle: string = '';
  filterCategory: string = "all"; 
  loading= signal<boolean>(false)
  dialog=signal<boolean>(false)
  ngOnInit() {
    this.loading.set(true);
      this.eventService.fetchEvents().pipe(finalize(()=>{this.loading.set(false)})).subscribe({
        next: (data)=>{
          this.events=data;
          this.filteredEvents=data;
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
//   openDialog(){
//     const dialogRef = this.dialogBox.open(FilterDialog, {
//       width: '400px',
//       data: { category: this.filterCategory }
//     });
//     this.dialog.set(true);
//     dialogRef.afterClosed().pipe(finalize(()=>{this.dialog.set(false)})).subscribe(result => {
//       if (result) {
//         this.filterCategory = result.category;
//         console.log('Dialog result:', this.filterCategory);
//         const temp=this.notices.filter(notice => 
//       notice.category.toLowerCase()=== result.category.toLowerCase()
//     )
//         this.filteredNotices = [
//           ...temp
//         ]
//         if(this.filteredNotices.length==0){
//           this.filteredNotices=this.notices;
//         }
//       }
//     });
//   }
  searchNotices(searchTerm: any) {
    this.filterTitle = searchTerm.value.toLowerCase();  
    this.filteredEvents = this.events.filter(notice => 
      notice.title.toLowerCase().startsWith(this.filterTitle)
    );
  }
}


