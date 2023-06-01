import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Punto2Component } from './components/punto2/punto2.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    HeaderComponent,
    FooterComponent,
    Punto2Component,
    TicketsComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
