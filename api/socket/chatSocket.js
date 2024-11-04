import saveMessage from "../repositories/chatRepository.js";

const setupChatSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join a chat room
    socket.on('joinRoom', (chatId) => {
      socket.join(chatId);
      console.log(`User with ID: ${socket.id} joined room: ${chatId}`);
    });

    // Handle sending and receiving messages
    socket.on('sendMessage', async (messageData) => {
      try {
        // Save message using the repository
        const message = await saveMessage(messageData);

        // Emit the message to the specific chat room
        io.to(messageData.chatId).emit('receiveMessage', message);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

export default setupChatSocket;