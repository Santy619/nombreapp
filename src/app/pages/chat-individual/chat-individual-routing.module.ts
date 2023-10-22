import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatIndividualPage } from './chat-individual.page';

const routes: Routes = [
  {
    path: '',
    component: ChatIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatIndividualPageRoutingModule {}
