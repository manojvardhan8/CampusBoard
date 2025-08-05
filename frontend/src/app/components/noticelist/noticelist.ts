import { Component, OnInit, signal } from '@angular/core';
import { Noticecard } from '../noticecard/noticecard';
import { CommonModule } from '@angular/common';
import { Notices } from '../../services/notices';
import { finalize, Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialog } from '../filter-dialog/filter-dialog';
import { sign } from 'node:crypto';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-noticelist',
  imports: [Noticecard,CommonModule,ReactiveFormsModule,MatInputModule,MatButtonModule,MatSelectModule,MatPaginator],
  templateUrl: './noticelist.html',
  styleUrl: './noticelist.css'
})
export class Noticelist implements OnInit{
  notices: any[] = [];
  filteredNotices: any[] = [];
  

  constructor(public noticesService: Notices,public dialogBox:MatDialog) {}
  filterTitle: string = '';
  filterCategory: string = "all"; 
  loading= signal<boolean>(false)
  dialog=signal<boolean>(false)
  ngOnInit() {
    this.loading.set(true);
      this.noticesService.fetchNotices().pipe(finalize(()=>{this.loading.set(false)})).subscribe({
        next: (data)=>{
          this.notices=data;
          this.filteredNotices=data;
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
  openDialog(){
    const dialogRef = this.dialogBox.open(FilterDialog, {
      width: '400px',
      data: { category: this.filterCategory }
    });
    this.dialog.set(true);
    dialogRef.afterClosed().pipe(finalize(()=>{this.dialog.set(false)})).subscribe(result => {
      if (result) {
        this.filterCategory = result.category;
        console.log('Dialog result:', this.filterCategory);
        const temp=this.notices.filter(notice => 
      notice.category.toLowerCase()=== result.category.toLowerCase()
    )
        this.filteredNotices = [
          ...temp
        ]
        if(this.filteredNotices.length==0){
          this.filteredNotices=this.notices;
        }
      }
    });
  }
  searchNotices(searchTerm: any) {
    this.filterTitle = searchTerm.value.toLowerCase();  
    this.filteredNotices = this.notices.filter(notice => 
      notice.title.toLowerCase().startsWith(this.filterTitle)
    );
  }
}
