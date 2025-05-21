import { SearchService } from 'app/service/search/search.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
  }

  onType(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.update(input.value);   
  }
  

}
