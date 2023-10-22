import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage {
  // ... tu lógica de marcado de casilla

  constructor(private router: Router , private appComponent: AppComponent) {
    appComponent.showMenu = false; // Oculta el menú en esta página
  }

  aceptarTerminos() {
    // Realiza aquí la lógica de aceptación de términos
    // Una vez aceptados los términos, navega a la página de "splash"
    this.router.navigate(['/login']);
  }
}