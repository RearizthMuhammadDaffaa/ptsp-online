import express from "express";
import {
  getNavbars,
  getNavbarById,
  saveNavbar,
  updateNavbar,
  deleteNavbar
} from "../controllers/NavbarController.js";

const router = express.Router();

router.get('/navbar',getNavbars);
router.get('/navbar/:id',getNavbarById);
router.post('/navbar',saveNavbar);
router.patch('/navbar/:id',updateNavbar);
router.delete('/navbar/:id',deleteNavbar);

export default router;