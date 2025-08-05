import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../services/events';

@Component({
  selector: 'app-eventcard',
  imports: [],
  templateUrl: './eventcard.html',
  styleUrl: './eventcard.css'
})
export class Eventcard {
  @Input() event:any;
}
