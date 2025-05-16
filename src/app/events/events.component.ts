import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'app/components/cards/card/card.component';

@Component({
  selector: 'events',
  standalone:true,
  imports:[CardComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
