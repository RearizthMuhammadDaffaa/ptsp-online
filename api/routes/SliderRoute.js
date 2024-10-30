import express from "express";
import {
  getSliders,
  getSliderById,
  saveSlider,
  updateSlider,
  deleteSlider
} from "../controllers/SliderController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/sliders',getSliders);
router.get('/sliders/:id',getSliderById);
router.post('/sliders',verifyToken(['superadmin','admin']),saveSlider);
router.patch('/sliders/:id',verifyToken(['superadmin','admin']),updateSlider);
router.delete('/sliders/:id',verifyToken(['superadmin','admin']),deleteSlider);

export default router;