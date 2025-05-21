import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private baseUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(filters: { category?: string; location?: string; date?: string }): Observable<any[]> {
    const params = new HttpParams({ fromObject: this.clean(filters) });
    return this.http.get<any[]>(this.baseUrl, { params });
  }

  /** remove empty / undefined keys */
  private clean(obj: Record<string, any>) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v !== '' && v != null)
    );
  }
}
