import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})

export class TicketFormComponent implements OnInit{

  ticket: Ticket;
  accion:string = 'new';

  constructor(private ticketService:TicketService, private rutaActiva:ActivatedRoute){
    this.ticket = new Ticket();
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params=>{
      if(params['nroTicket']==0){
        this.accion='new';
      }else{
        this.accion='update';
        this.ticket = this.ticketService.getTicket(params['nroTicket']);
      }
    });
  }

  guardarTicket(ticket:Ticket){
    this.ticket.fechaCobro = new Date();
    this.ticketService.addTicket(ticket);
  }

  calcularPrecioCobrado(){
    if(this.ticket.tipoEspectador=='extranjero'){
      this.ticket.precioCobrado=this.ticket.precioReal;
    }else{
      this.ticket.precioCobrado=this.ticket.precioReal - (this.ticket.precioReal*0.20);
    }
  }

}
