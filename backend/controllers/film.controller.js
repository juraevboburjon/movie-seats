import filmService from "../service/film.service.js";

class FilmController {
  async allFilms(req, res) {
    try {
      const allFilms = await filmService.getAllFilms();
      res.status(200).json(allFilms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createFilm(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Film picture is required!" });
      }

      const { filmName, description } = req.body;

      const filmImg = req.file.path || req.file.secure_url || req.file.url;

      const film = await filmService.create({
        filmName,
        description,
        filmImg,
      });

      res.status(200).json(film);
    } catch (error) {
      console.error("Error creating film:", error);
      res.status(500).json({ message: error.message });
    }
  }
}

export default new FilmController();
