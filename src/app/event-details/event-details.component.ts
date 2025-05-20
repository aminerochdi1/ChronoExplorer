import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommentService } from 'app/service/comments/comment.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  comments: any[] = [];
  newComment = {
    user_name: '',
    content: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');

    if (eventId) {
      this.http.get(`http://localhost:3000/events/${eventId}`).subscribe(data => {
        this.event = data;
      });

      this.fetchComments(+eventId);
    }
  }

  fetchComments(eventId: number) {
    this.commentService.getCommentsByEventId(eventId).subscribe(data => {
      this.comments = data;
    });
  }

  postComment() {
    if (!this.newComment.user_name.trim() || !this.newComment.content.trim()) return;

    const commentPayload = {
      event_id: this.event.id,
      user_name: this.newComment.user_name,
      content: this.newComment.content
    };

    this.commentService.postComment(commentPayload).subscribe(() => {
      this.newComment.user_name = '';
      this.newComment.content = '';
      this.fetchComments(this.event.id); // reload comments
    });
  }
}
