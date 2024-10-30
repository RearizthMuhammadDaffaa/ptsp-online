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
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/perkara',getPerkaras);
router.get('/syarat-perkara',getPerkarasAndSyarat);
router.get('/syarat-perkara/:id',getPerkarasAndSyaratById);
router.get('/perkara/:id',getPerkaraById);
router.post('/perkara',verifyToken(['superadmin','admin']),savePerkara);
router.patch('/perkara/:id',verifyToken(['superadmin','admin']),updatePerkara);
router.delete('/perkara/:id',verifyToken(['superadmin','admin']),deletePerkara);

export default router;