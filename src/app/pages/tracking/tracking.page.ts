import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  distance!: number;
  price!: number;

  constructor(private route: ActivatedRoute,private router: Router,
    private navCtrl: NavController) {}

  ngOnInit() {
    // Captura los parámetros de la URL
    this.route.params.subscribe(params => {
      // Asigna los valores a las propiedades del componente
      this.distance = +params['distance']; // Convierte a número
      this.price = +params['price']; // Convierte a número
    });
  }
}