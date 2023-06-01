import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets:Array<Ticket>;

  constructor() { 
    this.tickets = new Array<Ticket>();
  }
  
  getTickets():Array<Ticket>{
    return this.tickets;
  }
  
  getTicket(nroTicket:number):Ticket{
    var indice = this.tickets.findIndex((ticket)=>ticket.nroTicket==nroTicket);
    return this.tickets[indice];
  }


  addTicket(ticket:Ticket):void{
    ticket.nroTicket = this.getNroTicketDisponible();
    this.tickets.push(ticket);
  }

  private getNroTicketDisponible():number{
    var maxNro: number;
    maxNro = 0;
    for(var i=0; i<this.tickets.length; i++){
      if(maxNro<this.tickets[i].nroTicket){
        maxNro = this.tickets[i].nroTicket;
      }
    }
    return (maxNro + 1);
  }

  deleteTicket(nroTicket:number):void{
    this.tickets = this.tickets.filter((ticket)=>ticket.nroTicket!=nroTicket);
  }

}
