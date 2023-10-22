import { Component } from '@angular/core';

interface Viaje {
  nombreConductor: string;
  fotoAuto: string;
  distancia: number;
  tarifa: number;
}

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage {
  viajes: Viaje[] = [
    {
      nombreConductor: 'Juan Pérez',
      fotoAuto: '../assets/img/autoreal2.jpg',
      distancia: 5,
      tarifa: 10000,
    },
    {
      nombreConductor: 'Giovani Giorgo',
      fotoAuto: '../assets/img/autoreal.jpg',
      distancia: 3,
      tarifa: 8000,
    },
    {
      nombreConductor: 'Pepe Tapia',
      fotoAuto: '../assets/img/autoreal3.jpg',
      distancia: 3,
      tarifa: 5000,
    },
    // Agrega más viajes simulados aquí
  ];
}
