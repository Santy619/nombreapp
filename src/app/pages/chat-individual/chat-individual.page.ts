import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Mensaje {
  remitente: string;
  mensaje: string;
}

@Component({
  selector: 'app-chat-individual',
  templateUrl: './chat-individual.page.html',
  styleUrls: ['./chat-individual.page.scss'],
})
export class ChatIndividualPage implements OnInit {
  contactoSeleccionado: string | null = null; // Cambia el tipo a string | null
  conversacion: Mensaje[] = [];
  nuevoMensaje: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactoSeleccionado = this.route.snapshot.paramMap.get('contacto');
    // Carga la conversación simulada para este contacto
    this.cargarConversacion();
  }

  cargarConversacion() {
    // puedes cargar mensajes simulados en this.conversacion
    // Por ejemplo:
    this.conversacion.push({ remitente: 'Tú', mensaje: 'Hola' });
    this.conversacion.push({ remitente: this.contactoSeleccionado || '', mensaje: '¡Hola! ¿Cómo estás?' });
    // Agrega más mensajes según sea necesario
  }

  enviarMensaje() {
    // Agrega lógica para enviar mensajes aquí
    // Por ejemplo:
    this.conversacion.push({ remitente: 'Tú', mensaje: this.nuevoMensaje });
    this.nuevoMensaje = ''; // Limpia el campo de entrada después de enviar
  }
}