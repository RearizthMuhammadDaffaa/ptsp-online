import express from "express";
import {
  getHargas,
  getHargaById,
  saveHarga,
  updateHarga,
  deleteHarga,
  saveHargas
} from "../controllers/HargaController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/harga',getHargas);
router.get('/harga/:id',getHargaById);
router.post('/harga',verifyToken(['superadmin','admin']),saveHarga);
router.patch('/harga/:id' ,verifyToken(['superadmin','admin']) ,updateHarga);
router.delete('/harga/:id',verifyToken(['superadmin','admin']),deleteHarga);
router.post('/hargas',verifyToken(['superadmin','admin']),deleteHarga);

export default router;