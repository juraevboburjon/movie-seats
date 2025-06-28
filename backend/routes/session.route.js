import express from "express";
import sessionController from "../controllers/session.controller.js";
import { isAdmin } from "../middleware/admin.middleware.js";
import { authenticateJWT } from "../middleware/authJWT.js";

const router = express.Router();

router.post("/create", authenticateJWT, isAdmin, sessionController.create);
router.get("/all", sessionController.getAllSession);

export default router;
