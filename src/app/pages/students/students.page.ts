import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage {
  userLogged: any; // Definir el tipo de usuario según tu modelo
  user: any;
  constructor(private router: Router,private authService: AuthService) { }

  irAChat() {
    console.log('Navegando a la página de chat');
    this.router.navigate(['/chat']); // Navega a la página de chat
  }
  irPerfil(username: string): void {
    // Verificar si el usuario está definido
    if (this.user) {
      // Navegar al perfil del usuario
      this.router.navigate(['/profile', { username: username }]);
    } else {
      this.router.navigate(['/profile', { username: username }]);
      console.error('El usuario no está definido.'); // Puedes manejar este caso según tus necesidades
    }
  }

irViajes() {
  // Agrega aquí la lógica para navegar a la página de viajes
  this.router.navigate(['/viajes']);
}

}
