import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  userLogged: any; // Definir el tipo de usuario según tu modelo
  constructor(private router: Router,private authService: AuthService) { }

  irAChat() {
    console.log('Navegando a la página de chat');
    this.router.navigate(['/chat']); // Navega a la página de chat
  }
  irPerfil() {
    this.router.navigate(['/profile', this.userLogged.username]);
  }

irViajes() {
  // Agrega aquí la lógica para navegar a la página de viajes
  this.router.navigate(['/viajes']);
}
  ngOnInit() {
     this.userLogged = this.authService.getUser();
  }

}
