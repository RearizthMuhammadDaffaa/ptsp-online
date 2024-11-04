import express from "express";
import {
  getMessages,
  getMessageBySender,
  getMessageByChatId,
  getUniqueSenders,
  getMessageByName
} from "../controllers/MessageController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/message',getUniqueSenders);
router.get('/message/search',getMessageByName);
router.get('/message/sender',getMessageByChatId);


export default router;