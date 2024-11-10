import express from "express";
import {
  getKecamatans,
  getKecamatanById,
  saveKecamatan,
  updateKecamatan,
  deleteKecamatan
} from "../controllers/KecamatanController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/kecamatan',getKecamatans);
router.get('/kecamatan/:id',getKecamatanById);
router.post('/kecamatan',verifyToken(['superadmin','admin']),saveKecamatan);
router.patch('/kecamatan/:id',verifyToken(['superadmin','admin']),updateKecamatan);
router.delete('/kecamatan/:id',verifyToken(['superadmin','admin']),deleteKecamatan);

export default router;