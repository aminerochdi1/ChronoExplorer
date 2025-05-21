import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = 'http://localhost:3000/events';

  private term$ = new BehaviorSubject<string>('');

  readonly events$ = this.term$.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(title => {
      const params = title
        ? new HttpParams().set('title', title.trim())
        : undefined;                      
      return this.http.get<any[]>(this.baseUrl, { params });
    })
  );

  constructor(private http: HttpClient) {}

  update(term: string): void {
    this.term$.next(term);
  }
}
