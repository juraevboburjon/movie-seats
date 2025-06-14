import ticketModel from "../models/ticket.model.js";

class TicketService {
  async create(ticket) {
    const newTicket = await ticketModel.create(ticket);
    return newTicket;
  }

  async oneTicket(ticketId) {
    const ticket = await ticketModel.findById(ticketId);
    return ticket;
  }
}

export default new TicketService();
