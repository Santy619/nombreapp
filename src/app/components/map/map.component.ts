import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../../services/mapbox.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private mapboxService: MapboxService, private router: Router) {}

  ngOnInit() {
    this.mapboxService.initializeMap('map');
  }
  
}