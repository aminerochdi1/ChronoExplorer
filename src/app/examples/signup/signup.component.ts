import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    standalone:true,
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor(private router: Router) {}

    goToSignUp() {
        this.router.navigate(['/sign-up']);
      }

    ngOnInit() {}
}
