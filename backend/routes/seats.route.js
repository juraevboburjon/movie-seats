import express from "express";
import seatsController from "../controllers/seats.controller.js";

const router = express.Router();

router.get("/:id/all", seatsController.getAllSeats);
router.patch("/:sessionId/:seatNumber", seatsController.updateSeatStatus);

export default router;
