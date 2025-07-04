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

  async updateSeatStatus(req, res) {
    try {
      const { sessionId, seatNumber } = req.params;
      const { status } = req.body;
      const result = await seatsSevice.updateSeatStatus(
        sessionId,
        seatNumber,
        status
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new SeatsController();
