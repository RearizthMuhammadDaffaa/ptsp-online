import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Cloudinary configuration
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.v2.config({
  cloud_name: "dtxawyrz2",
  api_key: "971812266884377",
  api_secret: "3lNrfiK4OcRqzEuvfJlywI8XDqc",
});

export default cloudinary.v2;