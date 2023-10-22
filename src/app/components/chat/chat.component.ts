import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  simulatedMessages = [
    {
      senderAvatar: 'URL_DEL_AVATAR',
      senderName: 'Usuario 1',
      text: 'Hola, ¿cómo estás?'
    },
    {
      senderAvatar: 'URL_DEL_AVATAR',
      senderName: 'Usuario 2',
      text: '¡Hola! Estoy bien, ¿y tú?'
    },
    // Agrega más mensajes simulados según sea necesario
  ];

  constructor() { }

  ngOnInit() {}
}