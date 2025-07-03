import seatsModel from "../models/seats.model.js";

class SeatsService {
  async getAllSeats(sessionId) {
    const allSeats = await seatsModel.find({ sessionId });
    return allSeats;
  }
}

export default new SeatsService();
