import express from "express";
import ticketController from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/buy", ticketController.create);
router.get("/:id", ticketController.oneTicket);

export default router;
