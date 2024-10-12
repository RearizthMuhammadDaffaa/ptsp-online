import Catatan from "../models/CatatanModel.js";


export const getCatatans = async (req, res) => {
  try {
    const response = await Catatan.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCatatanById = async (req, res) => {
  try {
    const response = await Catatan.findOne({
      where: {
        id_catatan: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveCatatan = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const deskripsi_Catatan = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await Catatan.create(req.body)
    res.status(201).json({msg:'Catatan Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateCatatan = async (req, res) => {
  // const Catatan = await Catatan.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const deskripsi_Catatan = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await Catatan.update(req.body,{
      where:{
        id_catatan:req.params.id
      }
    })
    res.status(201).json({msg:'Catatan Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteCatatan = async (req, res) => {
  try {
    await Catatan.destroy({
      where:{
        id_catatan:req.params.id
      }
    })
    res.status(201).json({msg:'Catatan Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
