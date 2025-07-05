import seatsModel from "../models/seats.model.js";
import ticketService from "../service/ticket.service.js";

class TicketController {
  async create(req, res) {
    try {
      const { userName, userId, sessionId, seatNumber, status } = req.body;
      const seatDoc = await seatsModel.findOne({ sessionId, seatNumber });
      if (!seatDoc) {
        return res.status(404).json({ message: "Место не найдено" });
      }

      const ticket = await ticketService.create({
        userName,
        userId,
        sessionId,
        seat: seatDoc._id,
        status,
      });
      res.status(200).json(ticket);
    } catch (error) {
      console.error("Error creating ticket:", error);
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
