import { Component, OnInit, AfterViewInit } from '@angular/core';

// declare var initHeadline: any;

@Component({
  selector: 'about',
  standalone:true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     if (typeof initHeadline === 'function') {
  //       initHeadline();
  //     } else {
  //       console.warn('initHeadline not found');
  //     }
  //   }, 0); 
  // }
  

}
