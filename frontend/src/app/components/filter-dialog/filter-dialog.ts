import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatSelect, MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-filter-dialog',
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatSelectModule],
  templateUrl: './filter-dialog.html',
  styleUrl: './filter-dialog.css'
})
export class FilterDialog {
  
  constructor(
    public dialogRef: MatDialogRef<FilterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {category:string}) {}
  selectedCategory: string = 'all';
  clearFilter(){
    this.selectedCategory = 'all';
    this.dialogRef.close({
      category : this.selectedCategory
    });
  }
  applyFilter() {
    this.dialogRef.close({
      category : this.selectedCategory
    })
  }
}
