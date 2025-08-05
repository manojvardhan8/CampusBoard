import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-noticecard',
  imports: [],
  templateUrl: './noticecard.html',
  styleUrl: './noticecard.css',
})
export class Noticecard{
  @Input() notice:any;
  }
  

