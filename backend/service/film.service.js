import filmModel from "../models/film.model.js";

class filmService {
  async getAllFilms() {
    const allFilms = await filmModel.find();
    return allFilms;
  }

  async create(film) {
    const newFilm = await filmModel.create(film);
    return newFilm;
  }
}

export default new filmService();
