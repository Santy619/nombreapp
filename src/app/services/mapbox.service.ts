import { EventEmitter, Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  private routeCalculatedSource = new Subject<any>();
  routeCalculated$ = this.routeCalculatedSource.asObservable();
  private map!: mapboxgl.Map;
  mapboxToken = 'pk.eyJ1IjoibWFyaW9uZXRhIiwiYSI6ImNsbXJ3czJpejBiZjQyanQ0YndiM3dmbjQifQ.IdZsFZbOvUo7A9mtgU_4Pw';


  

  initializeMap(containerId: string, callback: (event: any) => void): void {
    (mapboxgl as any).accessToken = this.mapboxToken;

    this.map = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.5755, -33.6054],
      zoom: 13,
    });

    const directions = new MapboxDirections({
      accessToken: this.mapboxToken,
    });

    directions.on('route', (event: any) => {
      this.routeCalculatedSource.next(event);
    });

    const geocoder = new MapboxGeocoder({
      accessToken: this.mapboxToken,
      mapboxgl: mapboxgl,
    });

    this.map.on('load', () => {
      this.map.addControl(directions, 'top-left');
      this.map.addControl(geocoder, 'top-right');
    });

  
  }
  flyToCoordinates(coordinates: number[]): void {
    const center: mapboxgl.LngLatLike = {
      lng: coordinates[0],
      lat: coordinates[1],
    };

    this.map.flyTo({
      center: center,
      zoom: 13,
    });
  }
  flyToUserLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.map.flyTo({ center: [longitude, latitude], zoom: 15 });
    });
  }
}