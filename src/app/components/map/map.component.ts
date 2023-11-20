import { Component, AfterViewInit } from '@angular/core';
import { MapboxService } from '../../services/mapbox.service';
import { Router } from '@angular/router';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  distance?: number;
  price?: number;

  constructor(private mapboxService: MapboxService, private router: Router, private tripService: TripService) {}

  ngAfterViewInit() {
    this.mapboxService.initializeMap('map', (event) => {
      this.calculateDistance(event.route);
      this.mapboxService.flyToCoordinates([-70.5755, -33.6054]);

      // Después de inicializar, centrar en la ubicación del usuario
      this.mapboxService.flyToUserLocation();
    });

    // Obtener la geolocalización del usuario
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log('Latitud:', latitude, 'Longitud:', longitude);

      // Puedes centrar el mapa en la posición del usuario si lo deseas
      this.mapboxService.flyToUserLocation();
    });
  }

  calculateDistance(route: any): void {
    if (route && route[0] && route[0].legs && route[0].legs[0]) {
      const distance = route[0].legs[0].distance || 0;
      this.distance = distance / 1000;

      this.price = this.distance * 350;
    }
  }

  registerTrip(): void {
    if (this.distance && this.price) {
      const tripData = {
        distance: this.distance,
        price: this.price,
        // Puedes agregar más datos relevantes al viaje aquí
      };

      this.tripService.addTrip(tripData).subscribe(() => {
        console.log('Viaje registrado localmente con éxito:', tripData);
        this.router.navigate(['/tracking', { distance: this.distance, price: this.price }]);
      });
    } else {
      console.error('Datos de viaje no válidos.');
      this.router.navigate(['/tracking', { distance: this.distance, price: this.price }]);
    }
  }
}