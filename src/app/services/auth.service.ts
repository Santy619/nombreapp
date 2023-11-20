import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User as FirebaseAuthUser } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<FirebaseAuthUser | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }

  async login(username: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(username, password);
      return result.user;
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      throw error;
    }
  }

  logout() {
    this.afAuth.signOut();
  }
}