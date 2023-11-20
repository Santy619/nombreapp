import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage {
  email: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async resetPassword() {
    try {
      await this.afAuth.sendPasswordResetEmail(this.email);
      // El correo electrónico de recuperación se ha enviado correctamente
      // Puedes redirigir a otra página o mostrar un mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Correo Enviado',
        text: 'revisa tu bandeja de entrada.',
        heightAuto: false,
        confirmButtonColor: '#007BFF',
      });
      this.router.navigate(['/login']);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal correo no enviado',
        heightAuto: false,
      });
      console.error('Error al enviar el correo de recuperación:', error);
      // Maneja el error según tus necesidades (puedes mostrar un mensaje de error, etc.)
    }
  }
}
