import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/user.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username!: string;
  user: User = {}; // Inicializa con un objeto User vacío para evitar errores
  avatarUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const usernameParam = params.get('username');
      if (usernameParam) {
        this.username = usernameParam;

        // Genera la URL de la imagen de perfil personalizada
        const avatarLetter = this.username.charAt(0).toUpperCase();
        this.avatarUrl = `https://via.placeholder.com/200/000/fff?text=${avatarLetter}`;

        this.userService.getUserByUsername(this.username).subscribe((user) => {
          if (user) {
            this.user = user;
          } else {
            // Manejar el caso en que no se encontró el usuario
          }
        });
      } else {
        // Manejar el caso en que 'username' es nulo, por ejemplo, redirigir o mostrar un mensaje de error.
      }
    });
  }
}