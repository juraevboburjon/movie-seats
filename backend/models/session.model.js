import mongoose, { Schema, model } from "mongoose";

const sessionModel = new Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  cinemaHall: { type: String, required: true },
  startTime: { type: Date, required: true },
  seats: { type: Number, required: true, default: 40 },
  city: { type: String, required: true },
});

export default model("Session", sessionModel);
