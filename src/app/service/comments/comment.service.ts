import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) {}

  getCommentsByEventId(eventId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${eventId}`);
  }

  postComment(comment: { event_id: number; user_name: string; content: string }): Observable<any> {
    return this.http.post(this.baseUrl, comment);
  }
}
