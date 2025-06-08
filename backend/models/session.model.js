import mongoose, { Schema, model } from "mongoose";

const sessionModel = new Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  cinemaHall: { type: String, required: true },
  startTime: { type: Date, required: true },
  seats: { type: String, required: true },
});

export default model("Session", sessionModel);
