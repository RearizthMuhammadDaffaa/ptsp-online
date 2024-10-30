import express from "express";
import {
  getCatatans,
  getCatatanById,
  saveCatatan,
  updateCatatan,
  deleteCatatan
} from "../controllers/CatatanController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/catatan',getCatatans);
router.get('/catatan/:id',getCatatanById);
router.post('/catatan',verifyToken(['superadmin','admin']),saveCatatan);
router.patch('/catatan/:id',verifyToken(['superadmin','admin']),updateCatatan);
router.delete('/catatan/:id',verifyToken(['superadmin','admin']),deleteCatatan);

export default router;