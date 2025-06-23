import { json } from "express";
import movieModel from "../models/movie.model.js";

class MovieService {
  async getAllMovies() {
    const allMovies = await movieModel.find();
    return allMovies;
  }

  async getOneMovie(id) {
    const movie = await movieModel.findById(id);
    return movie;
  }

  async create(movie) {
    const newMovie = await movieModel.create(movie);
    return newMovie;
  }

  async delete(id) {
    const movie = await movieModel.findByIdAndDelete(id);
    return json({ movie, message: "Movie deleted succesfully" });
  }
}

export default new MovieService();
