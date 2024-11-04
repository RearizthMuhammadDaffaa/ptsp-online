import Message from "../models/MessageModel.js";

// Method to save message to the database
const saveMessage = async (messageData) => {
  try {
    const message = await Message.create(messageData);
    return message;
  } catch (error) {
    throw new Error('Failed to save message');
  }
};

export default saveMessage;
