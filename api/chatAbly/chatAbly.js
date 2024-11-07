// import { Realtime } from 'ably';
// import saveMessage from '../repositories/chatRepository.js';

// // Inisialisasi client Ably
// const ably = new Realtime({ key: '6JxJ1A.xg8zBQ:evY6xHIgp5d0OHSoOR-2_M9ZGzGG0heR8zK0n_BZhHA' });

// const setupChatAbly = () => {
//   const handleJoinRoom = (chatId, onMessageCallback) => {
//     const chatChannel = ably.channels.get(`chat-${chatId}`);
//     chatChannel.subscribe('message', (message) => {
//       onMessageCallback(message.data);
//     });
//   };

//   const sendMessageToRoom = async (chatId, messageData) => {
//     try {
//       // Simpan pesan di database
//       const message = await saveMessage(messageData);

//       // Kirim pesan ke channel Ably
//       const chatChannel = ably.channels.get(`chat-${chatId}`);
//       await chatChannel.publish('message', message);
//     } catch (error) {
//       console.error('Error sending message with Ably:', error);
//     }
//   };

//   return { handleJoinRoom, sendMessageToRoom };
// };

// export default setupChatAbly;
