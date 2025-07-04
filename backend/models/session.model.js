import mongoose, { Schema, model } from "mongoose";

const sessionModel = new Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  cinemaHall: { type: String, required: true },
  startTime: { type: Date, required: true },
  seatLegth: { type: Number, default: 40 },
  seats: [
    {
      seatNumber: { type: String, required: true },
      status: {
        type: String,
        enum: ["available", "booked"],
        default: "available",
      },
    },
  ],
  city: { type: String, required: true },
});

export default model("Session", sessionModel);
