import express from "express";
import {
  getSyaratTambahans,
  getSyaratTambahanById,
  saveSyaratTambahan,
  updateSyaratTambahan,
  deleteSyaratTambahan
} from "../controllers/SyaratTambahanController.js";

const router = express.Router();

router.get('/syarat-tambahan',getSyaratTambahans);
router.get('/syarat-tambahan/:id',getSyaratTambahanById);
router.post('/syarat-tambahan',saveSyaratTambahan);
router.patch('/syarat-tambahan/:id',updateSyaratTambahan);
router.delete('/syarat-tambahan/:id',deleteSyaratTambahan);

export default router;