import express from "express";
import {
  getMenus,
  getMenuById,
  saveMenu,
  updateMenu,
  deleteMenu
} from "../controllers/MenuController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/menu',getMenus);
router.get('/menu/:id',getMenuById);
router.post('/menu',verifyToken(['superadmin','admin']),saveMenu);
router.patch('/menu/:id',verifyToken(['superadmin','admin']),updateMenu);
router.delete('/menu/:id',verifyToken(['superadmin','admin']),deleteMenu);

export default router;