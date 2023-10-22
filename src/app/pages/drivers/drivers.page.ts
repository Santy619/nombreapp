import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage {
  nombre: string = '';
  vehiculo: string = '';
  edad: number = 0;
  patente: string = '';
  fotoLicencia: File | null = null;

  constructor(private router: Router) {}

  registrarComoConductor() {
    // Guardar temporalmente los datos en una variable o servicio
    const conductorData = {
      nombre: this.nombre,
      vehiculo: this.nombre,
      edad: this.edad,
      patente: this.patente,
      fotoLicencia: this.fotoLicencia ? this.fotoLicencia.name : '', // Nombre del archivo de la licencia
    };
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Tu vehiculo se ah registrdo correctamente.',
      heightAuto: false,
      confirmButtonColor: '#007BFF',
    })
    // Navegar a la página de perfil del conductor y pasar los datos como parámetros
    this.router.navigate(['/perfil-conductor'], {
      queryParams: { conductorData: JSON.stringify(conductorData) },
    });
  }

  fotoLicenciaPreview: any;

onFileChange(event: any) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    this.fotoLicencia = fileList[0];

    // Mostrar una vista previa de la imagen
    const reader = new FileReader();
    reader.onload = (e) => {
      this.fotoLicenciaPreview = reader.result;
    };
    reader.readAsDataURL(this.fotoLicencia);
  }
}
}
