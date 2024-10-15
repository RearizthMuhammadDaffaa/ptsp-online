import express from "express";
import {
  getVideoEmbeds,
  getVideoEmbedById,
  saveVideoEmbed,
  updateVideoEmbed,
  deleteVideoEmbed
} from "../controllers/VideoEmbedController.js";

const router = express.Router();

router.get('/video',getVideoEmbeds);
router.get('/video/:id',getVideoEmbedById);
router.post('/video',saveVideoEmbed);
router.patch('/video/:id',updateVideoEmbed);
router.delete('/video/:id',deleteVideoEmbed);

export default router;