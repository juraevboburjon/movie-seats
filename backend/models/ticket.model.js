import mongoose, { Schema, model } from "mongoose";

const ticketModel = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: {
    type: String,
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  // seatNumber: {
  //   type: String,
  //   required: true,
  // },
  seat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat",
    required: true,
  },
  status: {
    type: String,
    enum: ["booked", "pending"],
    default: "booked",
  },
});

export default model("Ticket", ticketModel);
