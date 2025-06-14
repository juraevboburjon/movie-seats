import { Schema, model } from "mongoose";

const movieModel = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  posterUrl: { type: String, required: true },
  releaseDate: { type: String, required: true },
});

export default model("Movie", movieModel);
