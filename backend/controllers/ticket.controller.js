import ticketService from "../service/ticket.service.js";

class TicketController {
  async create(req, res) {
    try {
      const { userId, sessionId, seatNumber, status } = req.body;

      const ticket = await ticketService.create({
        userId,
        sessionId,
        seatNumber,
        status,
      });
      res.status(200).json(ticket);
    } catch (error) {
      onsole.error("Error creating ticket:", error);
      res.status(500).json({ message: error.message });
    }
  }

  async oneTicket(req, res) {
    try {
      const ticketId = req.params.id;

      const ticket = await ticketService.oneTicket(ticketId);
      res.status(200).json(ticket);
    } catch (error) {
      console.error("Error creating ticket:", error);
      res.status(500).json({ message: error.message });
    }
  }
}

export default new TicketController();
