import movieModel from "../models/movie.model.js";

class MovieService {
  async getAllMovies() {
    const allMovies = await movieModel.find();
    return allMovies;
  }

  async create(movie) {
    const newMovie = await movieModel.create(movie);
    return newMovie;
  }
}

export default new MovieService();
