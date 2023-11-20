import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/user.interface'; // Ajusta según tu modelo de usuario
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user: User = {}; // Modelo de usuario
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async onSubmit() {
    try {
      if (!this.user.email || !this.user.password) {
        console.error('Email y contraseña son obligatorios');
        return;
      }
  
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
  
      if (userCredential) {
        // Registro exitoso, redirige a la página que desees
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Haz iniciado sesión correctamente.',
          heightAuto: false,
          confirmButtonColor: '#007BFF',
        });

        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal en el registro , comprueba credenciales',
          heightAuto: false,
        });
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro', error);
      if (typeof error === 'object' && error !== null && 'message' in error) {
        this.errorMessage = (error as any).message;
      } else {
        this.errorMessage = 'Error desconocido';
      }
    }
  }
}