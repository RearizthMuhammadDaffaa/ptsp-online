import express from "express";
import {
  getPerkaras,
  getPerkaraById,
  savePerkara,
  updatePerkara,
  deletePerkara,
  getPerkarasAndSyarat
} from "../controllers/PerkaraController.js";

const router = express.Router();

router.get('/perkara',getPerkarasAndSyarat);
router.get('/perkara/:id',getPerkaraById);
router.post('/perkara',savePerkara);
router.patch('/perkara/:id',updatePerkara);
router.delete('/perkara/:id',deletePerkara);

export default router;