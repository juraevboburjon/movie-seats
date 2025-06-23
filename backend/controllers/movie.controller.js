import movieService from "../service/movie.service.js";

class MovieController {
  async oneMovie(req, res) {
    try {
      const id = req.params.id;
      const movie = await movieService.getOneMovie(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async AllMovies(req, res) {
    try {
      const allMovies = await movieService.getAllMovies();
      res.status(200).json(allMovies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createMovie(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Film picture is required!" });
      }

      const { title, genre, description, duration, releaseDate } = req.body;

      const posterUrl = req.file.path || req.file.secure_url || req.file.url;

      const movie = await movieService.create({
        title,
        genre,
        description,
        duration,
        releaseDate,
        posterUrl,
      });

      res.status(200).json(movie);
    } catch (error) {
      console.error("Error creating film:", error);
      res.status(500).json({ message: error.message });
    }
  }
  async deleteMovie(req, res) {
    try {
      const id = req.params.id;
      const movie = await movieService.delete(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new MovieController();
