import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth/auth.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onRegister(username: string, email: string, password: string) {
    this.authService.register(username, email, password).subscribe({
      next: (response: any) => {
        console.log('Registration successful:', response);
        console.log(username,password,email);
        this.router.navigate(['/login']); 
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
