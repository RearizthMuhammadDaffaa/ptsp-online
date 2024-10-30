import express from "express";
import {
  getSyarats,
  getSyaratById,
  saveSyarat,
  updateSyarat,
  deleteSyarat
} from "../controllers/SyaratController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/syarat',getSyarats);
router.get('/syarat/:id',getSyaratById);
router.post('/syarat',verifyToken(['superadmin','admin']),saveSyarat);
router.patch('/syarat/:id',verifyToken(['superadmin','admin']),updateSyarat);
router.delete('/syarat/:id',verifyToken(['superadmin','admin']),deleteSyarat);

export default router;