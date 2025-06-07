import { Schema, model } from "mongoose";

const filmModel = new Schema({
  filmName: { type: String, required: true },
  filmImg: { type: String, required: true },
  description: { type: String, required: true },
});

export default model("Film", filmModel);
