import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import SliderRoute from "./routes/SliderRoute.js";
import PerkaraRoute from "./routes/PerkaraRoute.js";
import SyaratRoute from "./routes/SyaratRoute.js";
import SyaratTambahanRoute from "./routes/SyaratTambahanRoute.js";
import CatatanRoute from "./routes/CatatanRoute.js";
import MenuRoute from "./routes/MenuRoute.js";
import NavbarRoute from "./routes/NavbarRoute.js";
import VideoEmbedRoute from "./routes/VideoEmbedRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import MessageRoute from "./routes/MessageRoute.js";
import { Server } from "socket.io";
import setupChatSocket from "./socket/chatSocket.js";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [ 
      'http://localhost:5173',
      'http://localhost:5174',
      'https://ptsp-pa-admin.vercel.app',
      'https://ptsp-pa-admin.vercel.app'
    ],
    methods: ["GET", "POST"],
  },
});

// Initialize Socket.io with chat setup
setupChatSocket(io);

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://ptsp-pa-admin.vercel.app',
    'https://ptsp-online.vercel.app'
  ],  // Sesuaikan dengan URL React app
  credentials: true  // Izinkan cookie untuk dikirim
}));
app.use(express.json());
app.use(cookieParser());
app.use(FileUpload());
app.use(SliderRoute);
app.use(PerkaraRoute);
app.use(SyaratRoute);
app.use(SyaratTambahanRoute);
app.use(CatatanRoute);
app.use(MenuRoute);
app.use(NavbarRoute);
app.use(VideoEmbedRoute);
app.use(AuthRoute);
app.use(UserRoute);
app.use(MessageRoute);


app.use(express.static("public"));
server.listen(5000,()=> console.log("server Up and Running"))


