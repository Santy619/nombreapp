import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatIndividualPageRoutingModule } from './chat-individual-routing.module';

import { ChatIndividualPage } from './chat-individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatIndividualPageRoutingModule
  ],
  declarations: [ChatIndividualPage]
})
export class ChatIndividualPageModule {}
