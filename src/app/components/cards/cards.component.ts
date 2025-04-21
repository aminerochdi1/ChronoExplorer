import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  /*
  evenements = [
    {
      titre: 'L’Antiquité',
      description: 'Découvrez les grandes batailles et événements de la Rome antique.',
    }
  ]
    */
  constructor() { }

  ngOnInit(): void {
  }

}
