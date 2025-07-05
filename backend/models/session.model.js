import mongoose, { Schema, model } from "mongoose";

const sessionModel = new Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  cinemaHall: { type: String, required: true },
  startTime: { type: Date, required: true },
  seatLength: { type: Number, default: 40 },
  // seats: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Seat",
  //     required: true,
  //   },
  // ],

  city: { type: String, required: true },
});

export default model("Session", sessionModel);
