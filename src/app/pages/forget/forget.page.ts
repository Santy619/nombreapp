import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  email: string = ''; // Inicializa la propiedad
  
  constructor(private appComponent: AppComponent) {
    appComponent.showMenu = false; // Oculta el menú en esta página
  }

  onSubmit() {
    // Implementa la lógica para enviar el correo de restablecimiento aquí
  }
}
