import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'card-component',
  standalone:true,
  imports:[CardComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
