import Message from "../models/MessageModel.js";
import { Sequelize,Op } from "sequelize";

export const getMessages = async (req, res) => {
  try {
    const response = await Message.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMessageById = async (req, res) => {
  try {
    const response = await Message.findOne({
      where: {
        id_Message: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getMessageByChatId = async (req, res) => {
  try {
    const chatId = req.query.chatId
    const response = await Message.findAll({
      where: {
        chatId: chatId,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getMessageBySender = async (req, res) => {
  try {
    const name = req.query.name;
    const receiver = req.query.receiver;
    const response = await Message.findAll({
      where: {
        sender: name,
        receiver: receiver,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUniqueSenders = async (req, res) => {
  try {
    const uniqueSenders = await Message.findAll({
      attributes: [
        [Sequelize.col('chatId'), 'chatId'],
        [Sequelize.fn('MAX', Sequelize.col('timestamp')), 'lastMessageTime']
      ],
      group: ['chatId'],
      order: [[Sequelize.fn('MAX', Sequelize.col('timestamp')), 'DESC']],
    });

    // Map untuk mengembalikan hanya `chatId`
    res.json(uniqueSenders.map(item => ({
      chatId: item.chatId || 'Unknown',
      lastMessageTime: item.lastMessageTime,
    })));
  } catch (error) {
    console.error('Error fetching unique senders:', error);
    res.status(500).json({ error: 'An error occurred while fetching unique senders' });
  }
};

export const getMessageByName = async(req,res)=>{
  try {
    const search = req.query.search;
  const response = await Message.findOne({where:{
    
    chatId:{
      [Op.like]: `%${search}%`, 
    }
  }})
  res.json(response)
  res.status(400).json({msg:'data ditemukan'})
  } catch (error) {
    console.log(error.message);
  }
  
} 




export const deleteMessage = async (req, res) => {
  try {
    await Message.destroy({
      where:{
        id_Message:req.params.id
      }
    })
    res.status(201).json({msg:'Message Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
