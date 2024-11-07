import Message from "../models/MessageModel.js";

// Method to save message to the database
const saveMessage = async (req,res) => {
  const chatId = req.body.chatId
  const sender =  req.body.sender
  const receiver =  req.body.receiver
  const content =  req.body.content
  try {
    const message = await Message.create({
      chatId:chatId,
      sender:sender,
      receiver:receiver,
      content:content
    });
    res.json(message);
  } catch (error) {
    throw new Error('Failed to save message');
  }
};

export default saveMessage;
