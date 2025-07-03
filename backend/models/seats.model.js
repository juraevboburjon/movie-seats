import mongoose, { Schema, model } from "mongoose";

const seatModel = new Schema({
  seatNumber: { type: String, required: true },
  status: { type: String, enum: ["available", "booked"], required: true },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Seat", seatModel);
