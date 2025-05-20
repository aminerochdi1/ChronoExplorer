import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    // standalone:true,
    // imports:[RouterModule],
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    user: any = {};
    // router: any;

    constructor(private authService: AuthService,private http: HttpClient,private router: Router) { }


    ngOnInit() {
  const loggedInUser = this.authService.getUser();

  if (loggedInUser && loggedInUser.id) {
    this.http.get<any>(`http://localhost:3000/users/${loggedInUser.id}`).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error("Erreur lors du chargement du profil :", err);
      }
    });
    } else {
        console.warn("Aucun utilisateur connecté.");
    }
    }
    onLogout() {
        this.authService.logout();
    }

    getLoggedUserId(): number | null {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user?.id ?? null;
      }

    onSettings(): void {
        const userId = this.getLoggedUserId(); 
    
        if (!userId) {
          console.error("Aucun ID utilisateur trouvé !");
          return;
        }
    
        this.router.navigate(['/settings', userId]);
      }



}
