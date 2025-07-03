import seatsSevice from "../service/seats.sevice.js";

class SeatsController {
  async getAllSeats(req, res) {
    try {
      const sessionId = req.params.id;
      const allSeats = await seatsSevice.getAllSeats(sessionId);
      res.status(200).json(allSeats);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new SeatsController();
