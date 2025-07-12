import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import movieRoute from "./routes/movie.route.js";
import sessionRoute from "./routes/session.route.js";
import ticketRoute from "./routes/ticket.route.js";
import seatsRoute from "./routes/seats.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoute);
app.use("/api/movie", movieRoute);
app.use("/api/session", sessionRoute);
app.use("/api/seats", seatsRoute);
app.use("/api/ticket", ticketRoute);

const startapp = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URI)
      .then(() => console.log("DB connect succesfully"));
    app.listen(PORT, () => console.log("PORT Listening on", PORT));
  } catch (error) {
    console.log("Error on DB", error);
  }
};

startapp();
