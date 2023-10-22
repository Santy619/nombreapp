// viaje.model.ts
export interface Viaje {
    nombreConductor: string;
    fotoAuto: string; // Ruta a la imagen del auto
    distancia: number; // Distancia en kilómetros
    tarifa: number; // Tarifa en moneda local
  }