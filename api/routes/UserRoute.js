import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/UserController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/user', getUsers);
router.get('/user/:id', getUsersById);
router.post('/user', verifyToken(['superadmin']),createUser);
router.patch('/user/:id',verifyToken(['superadmin']),updateUser);
router.delete('/user/:id',verifyToken(['superadmin']),deleteUser);

export default router;