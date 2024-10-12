import express from "express";
import {
  getPerkaras,
  getPerkaraById,
  savePerkara,
  updatePerkara,
  deletePerkara,
  getPerkarasAndSyarat,
  getPerkarasAndSyaratById
} from "../controllers/PerkaraController.js";

const router = express.Router();

router.get('/perkara',getPerkaras);
router.get('/syarat-perkara',getPerkarasAndSyarat);
router.get('/syarat-perkara/:id',getPerkarasAndSyaratById);
router.get('/perkara/:id',getPerkaraById);
router.post('/perkara',savePerkara);
router.patch('/perkara/:id',updatePerkara);
router.delete('/perkara/:id',deletePerkara);

export default router;