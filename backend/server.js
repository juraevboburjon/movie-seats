import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoute);

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
