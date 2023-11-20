import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private trips: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedTrips = await this.storage.get('trips');
    this.trips = storedTrips || [];
  }

  getTrips(): Observable<any[]> {
    return from(this.storage.get('trips') as Promise<any[]>); // Ajusta aquí
  }

  addTrip(trip: any): Observable<any> {
    this.trips.push(trip);
    return from(this.storage.set('trips', this.trips));
  }
}