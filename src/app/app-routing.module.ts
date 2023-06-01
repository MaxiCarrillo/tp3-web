import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path: 'punto1', component: Punto1Component},
  {path: 'punto2', component: Punto2Component},
  {path: '', redirectTo: '/punto1', pathMatch: 'full' },
  {path: 'tickets', component: TicketsComponent},
  {path: 'tickets/:nroTicket', component: TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
