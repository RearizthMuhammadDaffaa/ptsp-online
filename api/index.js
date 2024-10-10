import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import SliderRoute from "./routes/SliderRoute.js";
import PerkaraRoute from "./routes/PerkaraRoute.js";
import SyaratRoute from "./routes/SyaratRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(SliderRoute);
app.use(PerkaraRoute);
app.use(SyaratRoute);
app.use(express.static("public"));
app.listen(5000,()=> console.log("server Up and Running"))