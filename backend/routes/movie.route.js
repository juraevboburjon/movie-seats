import express from "express";
import MovieController from "../controllers/movie.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.post(
  "/createMovie",
  isAdmin,
  upload.single("posterUrl"),
  MovieController.createMovie
);
router.get("/allMovies", MovieController.AllMovies);

export default router;
