import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any; // Puedes definir la interfaz del usuario según la información que tengas

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Obtén la información del usuario al cargar la página
    this.authService.getCurrentUser().then((user) => {
      this.user = user;
    });
  }
}