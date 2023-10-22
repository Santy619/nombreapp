import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged: any; // Definir el tipo de usuario según tu modelo

  setUser(user: any) {
    this.userLogged = user;
  }

  getUser() {
    return this.userLogged;
  }
}