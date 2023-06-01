import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent {

  tickets:Array<Ticket>;
  tipo:string = '';
  ticketsResumen:Array<Ticket>;

  constructor(private ticketService: TicketService, private router: Router){
    this.tickets = this.ticketService.getTickets();
    this.ticketsResumen = new Array<Ticket>();
  }

  venderTicket():void{
    this.router.navigate(['tickets', 0]);
  }

  eliminarTicket(nroTicket:number):void{
    this.ticketService.deleteTicket(nroTicket);
    this.tickets = this.ticketService.getTickets();
    this.getResumenOfTickets();
  }

  modificarTicket(nroTicket:number){
    this.router.navigate(['tickets',nroTicket]);
  }

  getResumenOfTickets(){
    this.ticketsResumen = this.tickets.filter(ticket=>ticket.tipoEspectador==this.tipo);
  }

  getTotalOfResumen():number{
    let num : number = 0;
    for(var i=0;i<this.ticketsResumen.length;i++){
      num=num+this.ticketsResumen[i].precioCobrado;
    }
    return num;
  }

}
