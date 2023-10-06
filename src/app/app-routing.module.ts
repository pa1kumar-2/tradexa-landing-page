import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsappSupportComponent } from './whatsapp-support/whatsapp-support.component';

const routes: Routes = [
  { path: 'whatsapp-support', component: WhatsappSupportComponent },
  { path: '', redirectTo: '/whatsapp-support', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
