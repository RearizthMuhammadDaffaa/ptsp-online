import Navbar from "../models/NavbarModel.js";
import path from "path";
import fs from "fs";
import cloudinary from "../config/Cloudinary.js";
import streamifier from 'streamifier'

export const getNavbars = async (req, res) => {
  try {
    const response = await Navbar.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getNavbarById = async (req, res) => {
  try {
    const response = await Navbar.findOne({
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

// export const saveNavbar = async (req, res) => {
//   if (req.files === null)
//     return res.status(400).json({ msg: "Tidak ada File yang di Upload" });
//   const name = req.body.name;
//   const title = req.body.title;
//   const file = req.files.file;
//   const fileSize = file.data.length;
//   const ext = path.extname(file.name);
//   const fileName = generateRandomLetter(15) + ext;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   const allowedType = [".png", ".jpg", "jpeg"];
//   if (!allowedType.includes(ext.toLocaleLowerCase()))
//     return res
//       .status(422)
//       .json({ msg: "extension gambar salah harus png,jpg atau jpeg" });
//   if (fileSize > 5000000)
//     return res.status(422).json({ msg: "Gambar harus kurang dari 5MB" });

//   file.mv(`./public/images/${fileName}`, async (err) => {
//     if (err) return res.status(500).json({ msg: err.massage });
//     try {
//       await Navbar.create({ name: name,title:title, image: fileName, url: url });
//       res.status(201).json({ msg: "Gambar berhasil ditambahkan" });
//     } catch (error) {
//       console.log(error.massage);
//     }
//   });

 
// };

// export const updateNavbar = async (req, res) => {
//   const navbar = await Navbar.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!navbar) return res.status(404).json({ msg: "gambar tidak ditemukan" });

//   let fileName = "";
//   if (!req.files || !req.files.file) {
//     fileName = navbar.image;
//   } else {
//     const file = req.files.file;
//     const fileSize = file.data.length;
//     const ext = path.extname(file.name);
//     fileName = generateRandomLetter(15) + ext;
//     const allowedType = [".png", ".jpg", "jpeg"];
//     if (!allowedType.includes(ext.toLocaleLowerCase()))
//       return res
//         .status(422)
//         .json({ msg: "extension gambar salah harus png,jpg atau jpeg" });
//     if (fileSize > 5000000)
//       return res.status(422).json({ msg: "Gambar harus kurang dari 5MB" });
//     const filepath = `./public/images/${navbar.image}`;
//   fs.unlinkSync(filepath);

//   file.mv(`./public/images/${fileName}`,  (err) => {
//     if (err) return res.status(500).json({ msg: err.massage });
    
//   });
//   }
//   const name = req.body.name;
//   const title = req.body.title;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   try {
//       await Navbar.update({name:name,title:title,image:fileName,url:url},{
//         where:{
//           id:req.params.id
//         }
//       })
//       res.status(200).json({msg:"gambar berhasil di update"})
//   } catch (error) {
//     console.log(error.message);
  
//   }
// };

// export const deleteNavbar = async (req, res) => {
//   const navbar = await Navbar.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!navbar) return res.status(404).json({ msg: "gambar tidak ditemukan" });
//   try {
//     const filepath = `./public/images/${navbar.image}`;
//     fs.unlinkSync(filepath);
//     await Navbar.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "gambar berhasil dihapus" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };


export const saveNavbar = async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ msg: "Tidak ada file yang diunggah." });
  }

  const name = req.body.name;
  const title = req.body.title;
  const file = req.files.file; // Akses file yang diunggah
  const ext = path.extname(file.name);
  const fileName = generateRandomLetter(15) + ext;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "Jenis file salah. Hanya menerima png, jpg, atau jpeg." });
  }

  if (file.size > 5000000) {
    return res.status(422).json({ msg: "Ukuran file terlalu besar. Maksimal 5MB." });
  }

  try {
    // Upload file langsung dari buffer
    const result = await cloudinary.uploader.upload(`data:${file.mimetype};base64,${file.data.toString('base64')}`, {
      public_id: fileName,
      folder: "ptsp-pa", // Tentukan folder di Cloudinary
    });

    // Simpan informasi ke database
    await Navbar.create({
      name: name,
      title: title,
      image: result.public_id,
      url: result.secure_url,
    });

    res.status(201).json({ msg: "Gambar berhasil ditambahkan." });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ msg: "Terjadi kesalahan pada server." });
  }
};

export const updateNavbar = async (req, res) => {
  const navbar = await Navbar.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!navbar) return res.status(404).json({ msg: "Gambar tidak ditemukan" });

  let fileName = navbar.image; // Menggunakan public_id dari Cloudinary

  if (req.files && req.files.file) {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const allowedType = [".png", ".jpg", "jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(422)
        .json({ msg: "Ekstensi gambar salah, harus png, jpg, atau jpeg" });

    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Gambar harus kurang dari 5MB" });

    try {
      // Hapus gambar lama dari Cloudinary
      await cloudinary.uploader.destroy(navbar.image);

      // Upload gambar baru ke Cloudinary menggunakan streamifier
      const uploadFromBuffer = (fileBuffer) => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              public_id: generateRandomLetter(15),
              folder: "ptsp-pa",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

          streamifier.createReadStream(fileBuffer).pipe(uploadStream);
        });
      };

      const result = await uploadFromBuffer(file.data);
      fileName = result.public_id;

    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

  const name = req.body.name;
  const title = req.body.title;
  const url = cloudinary.url(fileName);

  try {
    await Navbar.update(
      { name: name, title: title, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Gambar berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Gagal update data" });
  }
};


export const deleteNavbar = async (req, res) => {
  const navbar = await Navbar.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!navbar) return res.status(404).json({ msg: "Gambar tidak ditemukan" });

  try {
    // Hapus gambar dari Cloudinary
    await cloudinary.uploader.destroy(navbar.image);

    // Hapus entri di database
    await Navbar.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Gambar berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Gagal menghapus gambar" });
  }
};


