import { Component, OnInit, Inject, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-nucleoicons',
    templateUrl: './nucleoicons.component.html',
    styleUrls: ['./nucleoicons.component.scss']
})
export class NucleoiconsComponent implements OnInit {

    constructor( private element : ElementRef) {}

    ngOnInit() {
        const body = document.getElementsByTagName('app-nucleoicons')[0];
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    }

}
