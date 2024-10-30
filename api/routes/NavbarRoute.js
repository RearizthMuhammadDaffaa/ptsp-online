import express from "express";
import {
  getNavbars,
  getNavbarById,
  saveNavbar,
  updateNavbar,
  deleteNavbar
} from "../controllers/NavbarController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/navbar',getNavbars);
router.get('/navbar/:id',getNavbarById);
router.post('/navbar',verifyToken(['superadmin','admin']),saveNavbar);
router.patch('/navbar/:id',verifyToken(['superadmin','admin']),updateNavbar);
router.delete('/navbar/:id',verifyToken(['superadmin','admin']),deleteNavbar);

export default router;