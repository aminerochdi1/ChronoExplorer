
import { FilterService } from './../../../service/event/filter.service';
import { CommonModule } from '@angular/common';
import { Event,EventService } from './../../../events/event.service';
import { Component, OnInit,OnDestroy,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from 'app/search/search.component';
import { SearchService } from 'app/service/search/search.service';
import { Subscription } from 'rxjs';                         

                
@Component({
  selector: 'card',
  standalone:true,
  imports: [CommonModule,SearchComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  events: Event[] = [];
  private sub!: Subscription; 
  // Pagination Logic
  currentIndex = 0;
  pageSize=4;

  categories: string[] = [
    'Histoire',
    'Catastrophe naturelle',
    'Science',
    'Politique',
    "L'Antiquité",
    'Moyen Âge',
    "Renaissance & Temps Modernes",
    "Époque contemporaine"
  ];

  filters = { category: '', location: '', date: '' };


  get visibleEvents(): Event[] {
    const start = this.currentIndex * this.pageSize;
    return this.events.slice(start, start + this.pageSize);
  }
//CTOR
  constructor(private eventService: EventService,private router: Router,private filterService:FilterService,private searchService:SearchService) {} 

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
    // 1. subscribe to live search stream
    this.sub = this.searchService.events$.subscribe(events => {
      this.events = events;
      this.resetPageIfNeeded();
    });
  
    // 2. trigger initial load (empty title = full list)
    this.searchService.update('');
  
    // 3. handle responsive carousel
    this.setPageSize(window.innerWidth);
    window.addEventListener('resize', () =>
      this.setPageSize(window.innerWidth)
    );
  }
  


  applyFilters() {
    this.filterService.getEvents(this.filters).subscribe(data => {
      this.events = data;
      this.resetPageIfNeeded();
    });
  }

  private loadEvents() {
    this.filterService.getEvents({}).subscribe(data => {
      this.events = data;
      this.resetPageIfNeeded();
    });
  }
  

  private resetPageIfNeeded() {
    /* Keep currentIndex valid after list size changes */
    if (this.currentIndex * this.pageSize >= this.events.length) {
      this.currentIndex = 0;
    }
  }



}
