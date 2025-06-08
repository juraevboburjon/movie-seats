import express from "express";
import sessionController from "../controllers/session.controller.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/create", isAdmin, sessionController.create);
router.get("/all", sessionController.getAllSession);

export default router;
