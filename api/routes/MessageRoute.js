import express from "express";
import {
  getMessages,
  getMessageBySender,
  getMessageByChatId,
  getUniqueSenders,
  getMessageByName
} from "../controllers/MessageController.js";
import saveMessage from "../repositories/chatRepository.js";
import verifyToken from "../middleware/verifyToken.js";
// import setupChatAbly from "../chatAbly/chatAbly.js";

const router = express.Router();
// const chat = setupChatAbly();

router.get('/message',getUniqueSenders);
router.get('/message/search',getMessageByName);
router.get('/message/sender',getMessageByChatId);
// router.post('/message',saveMessage);
// router.post('/message', async (req, res) => {
//   const { chatId, messageData } = req.body;
//   try {
//     await chat.sendMessageToRoom(chatId, messageData);
//     res.status(200).send('Message sent');
//   } catch (error) {
//     res.status(500).send('Error sending message');
//   }
// });


export default router;