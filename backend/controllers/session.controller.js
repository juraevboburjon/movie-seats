import seatsModel from "../models/seats.model.js";
import sessionService from "../service/session.service.js";

class SessionController {
  async create(req, res) {
    try {
      const { movieId, cinemaHall, startTime, seatsCount, rowsCount } =
        req.body;

      // Сначала создаём сессию
      const session = await sessionService.create({
        movieId,
        cinemaHall,
        startTime,
      });

      // Генерируем места
      const seats = [];
      const rows = rowsCount || 5;
      const cols = seatsCount || 8;

      for (let row = 0; row < rows; row++) {
        const rowLetter = String.fromCharCode(65 + row); // A, B, C, ...
        for (let col = 1; col <= cols; col++) {
          seats.push({
            seatNumber: `${rowLetter}${col}`,
            status: "available",
            sessionId: session._id,
          });
        }
      }
      await seatsModel.insertMany(seats);

      res.status(200).json(session);
    } catch (error) {
      console.error("Error creating session:", error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAllSession(req, res) {
    try {
      const allSession = await sessionService.getAllSession();
      res.status(200).json(allSession);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const session = await sessionService.getOne(id);
      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new SessionController();
