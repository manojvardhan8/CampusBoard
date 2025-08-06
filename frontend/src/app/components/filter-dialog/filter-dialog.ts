import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatSelect, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter-dialog',
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatSelectModule,CommonModule],
  templateUrl: './filter-dialog.html',
  styleUrl: './filter-dialog.css'
})
export class FilterDialog {
  selectedCategory?:string;
  selectedRegistration?:string;
  selection?:string;
  constructor(
    public dialogRef: MatDialogRef<FilterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {category:string,selection:string,register:string}) {
      this.selectedCategory=data.category || 'all';
      this.selection=data.selection;
      this.selectedRegistration=data.register || 'all';
    }
  
  clearFilter(){
    if(this.selection ==='notice'){
      this.selectedCategory = 'all';
      this.dialogRef.close({
        category : this.selectedCategory
    });
    }
    else{
      this.selectedRegistration = 'all';
      this.dialogRef.close({
        register : this.selectedRegistration
    });
    }
    
  }
  applyFilter() {
    if(this.selection==='notice'){
      this.dialogRef.close({
      category : this.selectedCategory
    });
    }
    else{
      this.dialogRef.close({
      register : this.selectedRegistration
    });
    }
  }
}
