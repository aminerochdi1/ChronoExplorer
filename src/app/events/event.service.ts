import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  location: string;
  created_at: string;
  updated_at: string;
  image_path: string;  
}

export interface EventResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  events: Event[];
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }
  
}
