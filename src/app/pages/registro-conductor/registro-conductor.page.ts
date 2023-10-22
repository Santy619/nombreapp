import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage {
  nombre: string = '';
  vehiculo: string = '';
  edad: number = 0;
  patente: string = '';
  licencia: File | null = null; // Variable para almacenar el archivo de licencia

  constructor(private router: Router) {}

  registrarComoConductor() {
    // Aquí puedes procesar los datos del formulario
    // Por ejemplo, enviarlos a un servidor

    // Redirigir a la página de perfil de conductor con los datos del conductor
    this.router.navigate(['/perfil-conductor'], {
      queryParams: {
        nombre: this.nombre,
        vehiculo: this.vehiculo,
        edad: this.edad,
        patente: this.patente,
        licencia: this.licencia ? this.licencia.name : null,
      },
    });
  }

  onFileSelected(event: any) {
    // Manejar la selección de un archivo de licencia
    this.licencia = event.target.files[0];
  }
}