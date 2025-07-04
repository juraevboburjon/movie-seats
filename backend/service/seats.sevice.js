import mongoose from "mongoose";
import seatsModel from "../models/seats.model.js";

class SeatsService {
  async getAllSeats(sessionId) {
    const allSeats = await seatsModel.find({ sessionId });
    return allSeats;
  }

  async updateSeatStatus(sessionId, seatNumber, status) {
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId);
    return await seatsModel.updateOne(
      { sessionId: sessionObjectId, seatNumber },
      { $set: { status } }
    );
  }
}

export default new SeatsService();
