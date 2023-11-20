import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Verifica si hay un usuario autenticado al cargar la página
    this.checkIfUserIsAuthenticated();
  }

  async checkIfUserIsAuthenticated() {
    try {
      // Comprueba la autenticación actual
      const user = await this.authService.getCurrentUser();
  
      if (user) {
        // Usuario autenticado encontrado, redirige a la página de inicio
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Error al verificar la autenticación', error);
    }
  }

  async onSubmit() {
    try {
      // Inicia sesión con Firebase
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        this.email,
        this.password
      );

      if (userCredential) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio exitoso',
          text: 'Haz iniciado sesión correctamente.',
          heightAuto: false,
          confirmButtonColor: '#007BFF',
        });

        // Inicio de sesión exitoso, redirige a la página de inicio
        this.router.navigate(['/home']);
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos',
        heightAuto: false,
      });
    }
  }

  async loginWithGoogle() {
    try {
      // Inicia sesión con Google
      const userCredential = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );

      if (userCredential) {
        // Inicio de sesión exitoso, redirige a la página de inicio
        this.router.navigate(['/home']);
      } else {
        console.error('Error al iniciar sesión con Google');
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error);
    }
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}