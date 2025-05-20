import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    standalone:true,
    imports: [FormsModule,RouterModule],
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    errorMessage: string ='';

    showErrorPopup: boolean = false;

    constructor(private router: Router, private authService: AuthService) {}

    goToSignUp() {
        this.router.navigate(['/sign-up']);
      }

    ngOnInit() {

    }

    
    onSubmit(email: string, password: string) {
        // console.log('showErrorPopup status:', this.showErrorPopup);

        this.authService.login(email, password).subscribe({
          next: (res: any) => {
            this.authService.setUser(res.user);
            this.router.navigate(['/user-profile']);
          },
          error: (err) => {
            if (err.status === 401) {
                this.showErrorPopup = true;
              }
        
          }
        });      
      }

      closeErrorPopup() {
        this.showErrorPopup = false;
      }
      
}
