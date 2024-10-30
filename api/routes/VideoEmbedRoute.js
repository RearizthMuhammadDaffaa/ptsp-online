import express from "express";
import {
  getVideoEmbeds,
  getVideoEmbedById,
  saveVideoEmbed,
  updateVideoEmbed,
  deleteVideoEmbed
} from "../controllers/VideoEmbedController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/video',getVideoEmbeds);
router.get('/video/:id',getVideoEmbedById);
router.post('/video', verifyToken(['superadmin','admin']),saveVideoEmbed);
router.patch('/video/:id', verifyToken(['superadmin','admin']),updateVideoEmbed);
router.delete('/video/:id',verifyToken(['superadmin','admin']),deleteVideoEmbed);

export default router;