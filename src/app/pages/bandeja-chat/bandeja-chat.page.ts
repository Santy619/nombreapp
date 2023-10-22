import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bandeja-chat',
  templateUrl: './bandeja-chat.page.html',
  styleUrls: ['./bandeja-chat.page.scss'],
})
export class BandejaChatPage {
  contactos = [
    { nombre: 'Contacto 1' },
    { nombre: 'Contacto 2' },
    { nombre: 'Contacto 3' },
    // Agrega más contactos según sea necesario
  ];

  constructor(private navCtrl: NavController) {}

  abrirChat(contacto: any) {
    // Navega a la página de conversación individual y pasa el contacto como parámetro
    this.navCtrl.navigateForward(`/chat/${contacto.nombre}`);
  }
}