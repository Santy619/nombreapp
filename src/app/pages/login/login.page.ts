import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService , private authService: AuthService) {}

  async onSubmit() {
    this.userService.getUserByUsername(this.username).subscribe((user) => {
      if (user && user.password === this.password) {

         // Guarda el usuario en el servicio de autenticación
         this.authService.setUser(user);


        Swal.fire({
          icon: 'success',
          title: 'Inicio exitoso',
          text: 'Haz iniciado sesion correctamente.',
          heightAuto: false,
          confirmButtonColor: '#007BFF',
        })
        // Inicio de sesión exitoso, redirige a la página de inicio
        this.router.navigate(['/home']);
      } else {
        // Credenciales incorrectas, muestra un mensaje de error
        console.error('Usuario o contraseña incorrectos');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contrasena incorrectos',
          heightAuto: false,
    
        })
      }
    });
  }
}