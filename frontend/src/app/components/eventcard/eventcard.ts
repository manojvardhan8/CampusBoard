import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../services/events';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eventcard',
  imports: [RouterLink],
  templateUrl: './eventcard.html',
  styleUrl: './eventcard.css'
})
export class Eventcard {
  @Input() event:any;
}
