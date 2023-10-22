import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandejaChatPageRoutingModule } from './bandeja-chat-routing.module';

import { BandejaChatPage } from './bandeja-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandejaChatPageRoutingModule
  ],
  declarations: [BandejaChatPage]
})
export class BandejaChatPageModule {}
