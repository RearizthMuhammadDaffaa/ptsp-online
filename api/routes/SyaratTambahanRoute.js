import express from "express";
import {
  getSyaratTambahans,
  getSyaratTambahanById,
  saveSyaratTambahan,
  updateSyaratTambahan,
  deleteSyaratTambahan
} from "../controllers/SyaratTambahanController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/syarat-tambahan',getSyaratTambahans);
router.get('/syarat-tambahan/:id',getSyaratTambahanById);
router.post('/syarat-tambahan', verifyToken(['superadmin','admin']),saveSyaratTambahan);
router.patch('/syarat-tambahan/:id',verifyToken(['superadmin','admin']),updateSyaratTambahan);
router.delete('/syarat-tambahan/:id',verifyToken(['superadmin','admin']),deleteSyaratTambahan);

export default router;