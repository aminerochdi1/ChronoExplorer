import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/auth/user.service';
import { User } from 'app/service/auth/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  password: string = '';
  userId!: number;
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    image: '',
    cover_picture: ''
  };

  showPassword: boolean=false;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.password = '';
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

  onSubmit(): void {
    if (!this.password.trim()) {
      alert('Le mot de passe est requis.');
      return;
    }
  
    const payload = {
      ...this.user,
      password: this.password 
    };
  
    this.userService.updateUser(this.userId, payload).subscribe(() => {
      alert('Utilisateur mis à jour avec succès !');
      this.password = '';
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onFileSelected(event: any, field: 'image' | 'cover_picture') {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      this.userService.uploadImage(formData).subscribe({
        next: () => {
          this.user[field] = file.name;
        },
        error: (err) => {
          console.error('Upload failed:', err);
        }
      });
    }
  }
  
  



}
