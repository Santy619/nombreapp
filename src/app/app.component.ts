import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = true; // Puedes establecer el valor inicial según tus necesidades
  public pages = [
    { title: 'Inicio', url: '/home' },
    { title: 'Cerrar Sesion', action: 'logout' },
    { title: 'login', url: '/login' },
    { title: 'Nosotros', url: '/nosotros' },
    { title: 'Mi QR', url: '/qr-generator' },
    
    
    // Agregar más páginas aquí 
  ];

  constructor(private authService: AuthService, private router: Router) {}

  handleAction(action: string): void {
    // Manejar diferentes acciones aquí
    if (action === 'logout') {
      this.authService.logout();
      // Puedes redirigir a la página de inicio de sesión o hacer cualquier otra acción después del cierre de sesión
      this.router.navigate(['/login']);
    }
  }
}
