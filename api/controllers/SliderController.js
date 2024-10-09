import Slider from "../models/SliderModel.js";
import path from "path";
import fs from "fs";

export const getSliders = async (req, res) => {
  try {
    const response = await Slider.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSliderById = async (req, res) => {
  try {
    const response = await Slider.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

function generateRandomLetter(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export const saveSlider = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "Tidak ada File yang di Upload" });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = generateRandomLetter(15) + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", "jpeg"];
  if (!allowedType.includes(ext.toLocaleLowerCase()))
    return res
      .status(422)
      .json({ msg: "extension gambar salah harus png,jpg atau jpeg" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Gambar harus kurang dari 5MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.massage });
    try {
      await Slider.create({ name: name, image: fileName, url: url });
      res.status(201).json({ msg: "Gambar berhasil ditambahkan" });
    } catch (error) {
      console.log(error.massage);
    }
  });

 
};

export const updateSlider = async (req, res) => {
  const slider = await Slider.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!slider) return res.status(404).json({ msg: "gambar tidak ditemukan" });

  let fileName = "";
  if (req.file === null) {
    fileName = slider.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = generateRandomLetter(15) + ext;
    const allowedType = [".png", ".jpg", "jpeg"];
    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res
        .status(422)
        .json({ msg: "extension gambar salah harus png,jpg atau jpeg" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Gambar harus kurang dari 5MB" });
    const filepath = `./public/images/${slider.image}`;
  fs.unlinkSync(filepath);

  file.mv(`./public/images/${fileName}`,  (err) => {
    if (err) return res.status(500).json({ msg: err.massage });
    
  });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
      await Slider.update({name:name,image:fileName,url:url},{
        where:{
          id:req.params.id
        }
      })
      res.status(200).json({msg:"gambar berhasil di update"})
  } catch (error) {
    console.log(error.message);
  
  }
};

export const deleteSlider = async (req, res) => {
  const slider = await Slider.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!slider) return res.status(404).json({ msg: "gambar tidak ditemukan" });
  try {
    const filepath = `./public/images/${slider.image}`;
    fs.unlinkSync(filepath);
    await Slider.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "gambar berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
