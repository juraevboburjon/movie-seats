import express from "express";
import filmController from "../controllers/film.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/createFilm", upload.single("filmImg"), filmController.createFilm);
router.get("/allfilms", filmController.allFilms);

export default router;
