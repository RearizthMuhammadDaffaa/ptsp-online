import express from "express";
import {
  getCatatans,
  getCatatanById,
  saveCatatan,
  updateCatatan,
  deleteCatatan
} from "../controllers/CatatanController.js";

const router = express.Router();

router.get('/catatan',getCatatans);
router.get('/catatan/:id',getCatatanById);
router.post('/catatan',saveCatatan);
router.patch('/catatan/:id',updateCatatan);
router.delete('/catatan/:id',deleteCatatan);

export default router;