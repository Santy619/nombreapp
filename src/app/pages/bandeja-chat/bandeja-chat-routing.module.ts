import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandejaChatPage } from './bandeja-chat.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandejaChatPageRoutingModule {}
