import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-viajes',
  templateUrl: './historial-viajes.page.html',
  styleUrls: ['./historial-viajes.page.scss'],
})
export class HistorialViajesPage {
  viajesActivos = [
    { nombre: 'Viaje Activo 1' },
    { nombre: 'Viaje Activo 2' },
    { nombre: 'Viaje Activo 3' },
  ];

  viajesCompletados = [
    { nombre: 'Viaje Completado 1' },
    { nombre: 'Viaje Completado 2' },
  ];

  viajesCancelados = [
    { nombre: 'Viaje Cancelado 1' },
  ];
}