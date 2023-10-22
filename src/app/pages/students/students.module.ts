import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsPageRoutingModule } from './students-routing.module';

import { StudentsPage } from './students.page';
import { ChatComponent } from 'src/app/components/chat/chat.component'; // Ajusta la ruta según tu estructura de carpetas


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsPageRoutingModule
  ],
  declarations: [StudentsPage,ChatComponent]
})
export class StudentsPageModule {}
