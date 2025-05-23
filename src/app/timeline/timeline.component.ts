import { Component, OnInit } from '@angular/core';
import { EventService, Event } from 'app/events/event.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  imports: [CommonModule] 
})
export class TimelineComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      // data is already Event[]
      this.events = data.sort((a, b) =>
        new Date(a.event_date).getTime() - new Date(b.event_date).getTime()
      );
    });
  }
}
