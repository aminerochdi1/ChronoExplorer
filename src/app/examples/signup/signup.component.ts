import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'node:console';
import { userInfo } from 'node:os';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    standalone:true,
    imports: [FormsModule,RouterModule,NgbToastModule],
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    toastType: 'success' | 'danger' = 'success';
    showToast = false;
    toastMessage = '';

    showLoginSuccess = false;

    errorMessage: string ='';

    showErrorPopup: boolean = false;

    constructor(private router: Router, private authService: AuthService) {}

    goToSignUp() {
        this.router.navigate(['/sign-up']);
      }

    ngOnInit() {

    }

    
    onSubmit(email: string, password: string) {
        this.authService.login(email, password).subscribe({
          next: (res: any) => {
            this.authService.setUser(res.user);
            //Toast 
            // this.toastMessage = 'Connexion réussie ! 👋';
            // this.toastType = 'success';
            // this.showToast = true;
      
            // setTimeout(() => this.showToast = false, 3000);
            this.router.navigate(['/user-profile']);
          },
          error: (err) => {
          //   if (err.status === 401) {
          //     this.toastMessage = 'Identifiants invalides. Réessayez.';
          //     this.toastType = 'danger';
          //     this.showToast = true;

          // setTimeout(() => this.showToast = false, 3000);
          //   }
          }
        });      
      }

      closeErrorPopup() {
        this.showErrorPopup = false;
      }
      
}
