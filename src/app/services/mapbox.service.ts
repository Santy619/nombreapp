import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';


@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  private map!: mapboxgl.Map;
  mapboxToken = 'pk.eyJ1IjoibWFyaW9uZXRhIiwiYSI6ImNsbXJ3czJpejBiZjQyanQ0YndiM3dmbjQifQ.IdZsFZbOvUo7A9mtgU_4Pw'

  constructor() {
    //token de Mapbox al importar el módulo
    (mapboxgl as any).accessToken = this.mapboxToken;
  }

  initializeMap(containerId: string): void {
    this.map = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.5755, -33.6054], // Coordenadas de Duoc UC en Puente Alto
      zoom: 13,
    });
  
    // Inicializa la extensión de direcciones
    const directions = new MapboxDirections({
      accessToken: this.mapboxToken,
    });
  
    // Añade el control de direcciones al mapa
    this.map.addControl(directions, 'top-left'); // Puedes ajustar la posición según tus necesidades
  }
  
}