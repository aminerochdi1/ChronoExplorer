import { CommonModule } from '@angular/common';
import { Event,EventService } from './../../../events/event.service';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import Swiper from 'swiper';
// import 'swiper/css';


@Component({
  selector: 'card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  events: Event[] = [];
  
  // Pagination Logic
  currentIndex = 0;
  pageSize=4;

  get visibleEvents(): Event[] {
    const start = this.currentIndex * this.pageSize;
    return this.events.slice(start, start + this.pageSize);
  }


  nextSlide() {
    if ((this.currentIndex + 1) * this.pageSize >= this.events.length) {
      this.currentIndex = 0; // loop to start
    } else {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = Math.floor((this.events.length - 1) / this.pageSize);
    } else {
      this.currentIndex--;
    }
  }

  shouldShowNavigation(): boolean {
    return this.events.length > this.pageSize;
  }

  //CTOR
  constructor(private eventService: EventService,private router: Router) {} 

  onClickedEvent(id: number) {
    this.router.navigate(['/events', id]);
  }

      //Changing PageSize
      setPageSize(width: number) {
        if (width < 600) {
          this.pageSize = 1; // mobile
        } else if (width < 900) {
          this.pageSize = 3; // tablet
        } else {
          this.pageSize = 4; // desktop
        }
      }

  // Run ON LOAD
  ngOnInit(): void {
    // Fetsh events
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events;
      },
      error: (error) => {
        // console.error('API error:', error);
      }
    });

    //Change PageSize
    this.setPageSize(window.innerWidth);
    
    window.addEventListener('resize', () => {
      this.setPageSize(window.innerWidth);
    });

  }

  

}
