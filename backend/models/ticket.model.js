import mongoose, { Schema, model } from "mongoose";

const ticketModel = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  seatNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked",
  },
});

export default model("Ticket", ticketModel);
