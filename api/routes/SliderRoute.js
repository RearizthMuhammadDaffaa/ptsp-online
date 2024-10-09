import express from "express";
import {
  getSliders,
  getSliderById,
  saveSlider,
  updateSlider,
  deleteSlider
} from "../controllers/SliderController.js";

const router = express.Router();

router.get('/sliders',getSliders);
router.get('/sliders/:id',getSliderById);
router.post('/sliders',saveSlider);
router.patch('/sliders/:id',updateSlider);
router.delete('/sliders/:id',deleteSlider);

export default router;