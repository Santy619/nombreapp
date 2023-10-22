import { Component, OnInit } from '@angular/core';
// import * as QRCode from 'qrcode/lib';
import * as QRCode from 'qrcode';
@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage {

  qrImage: string = '';
  rotationDegrees: number = 0;

  constructor() {}

  generateQRCodeWithRotation() {
    const qrText = 'TuTextoAqui'; // Reemplaza con tu texto
    const options = {
      width: 300, // Ancho del código QR
      margin: 2, // Margen
    };

    QRCode.toDataURL(qrText, options, (err: any, url: any) => {
      if (err) {
        console.error(err);
      } else {
        this.qrImage = url;
        this.rotationDegrees += 90; // Ajusta la rotación según tus necesidades
      }
    });
  }
}