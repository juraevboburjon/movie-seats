import mongoose from "mongoose";
import sessionModel from "../models/session.model.js";
import ticketService from "../service/ticket.service.js";

class TicketController {
  async create(req, res) {
    try {
      const { userId, userName, sessionId, seatNumber, status } = req.body;

      const ticket = await ticketService.create({
        userId,
        userName,
        sessionId,
        seatNumber,
        status,
      });

      // const sessionObjectId = new mongoose.Types.ObjectId(sessionId);

      // const updateResult = await sessionModel.updateOne(
      //   { _id: sessionObjectId, "seats.seatNumber": seatNumber },
      //   { $set: { "seats.$.status": "booked" } }
      // );

      // console.log("Update result:", updateResult);

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
