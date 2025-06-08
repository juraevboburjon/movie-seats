import sessionService from "../service/session.service.js";

class SessionController {
  async create(req, res) {
    try {
      const { movieId, cinemaHall, startTime, seats } = req.body;

      const session = await sessionService.create({
        movieId,
        cinemaHall,
        startTime,
        seats,
      });
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
}

export default new SessionController();
