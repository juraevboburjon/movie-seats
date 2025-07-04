import express from "express";
import MovieController from "../controllers/movie.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";
import { authenticateJWT } from "../middleware/authJWT.js";

const router = express.Router();

router.post(
  "/createMovie",
  authenticateJWT,
  isAdmin,
  upload.single("posterUrl"),
  MovieController.createMovie
);
router.get("/allMovies", MovieController.AllMovies);
router.get("/:id", MovieController.oneMovie);
router.delete("/:id", authenticateJWT, isAdmin, MovieController.deleteMovie);

export default router;
