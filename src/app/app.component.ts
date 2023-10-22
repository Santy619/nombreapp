import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = true; // Puedes establecer el valor inicial según tus necesidades
  public pages = [
    { title: 'Inicio', url: '/home' },
    { title: 'Iniciar Sesión', url: '/login' },
    { title: 'Nosotros', url: '/nosotros' },
    { title: 'Mi QR', url: '/qr-generator' },
    
    
    // Agregar más páginas aquí 
  ];

  constructor() {}
}
