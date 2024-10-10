import express from "express";
import {
  getSyarats,
  getSyaratById,
  saveSyarat,
  updateSyarat,
  deleteSyarat
} from "../controllers/SyaratController.js";

const router = express.Router();

router.get('/syarat',getSyarats);
router.get('/syarat/:id',getSyaratById);
router.post('/syarat',saveSyarat);
router.patch('/syarat/:id',updateSyarat);
router.delete('/syarat/:id',deleteSyarat);

export default router;