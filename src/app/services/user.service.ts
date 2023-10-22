import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'assets/data/users.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error al cargar los usuarios', error);
    return of([]); // Retorna un array vacío en caso de error
  }
  getUserByUsername(username: string) {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.username === username))
    );
  }
}