import { CommonModule } from '@angular/common';
import { Event,EventService } from './../../../events/event.service';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  events: Event[] = [];
  
  constructor(private eventService: EventService) {} 

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        // IF CODE 200
        // console.log('Received events:', events);
        this.events = events;
      },
      error: (error) => {
        // console.error('API error:', error);
      }
    });
  }

  

}
