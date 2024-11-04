import Perkara from "../models/PerkaraModel.js";
import Syarat from "../models/SyaratModel.js";
import SyaratTambahan from "../models/SyaratTambahanModel.js";
import Catatan from "../models/CatatanModel.js";


export const getPerkaras = async (req, res) => {
  try {
    const response = await Perkara.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};


export const getPerkarasAndSyarat = async (req, res) => {
  try {
    const response = await Perkara.findAll({
      include: [Syarat,SyaratTambahan,Catatan]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getPerkarasAndSyaratById = async (req, res) => {
  try {
    const response = await Perkara.findOne({
      where:{
          id_perkara:req.params.id
      },
      include: [Syarat,SyaratTambahan,Catatan]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPerkaraById = async (req, res) => {
  try {
    const response = await Perkara.findOne({
      where: {
        id_perkara: req.params.id,
      },
      include: [Syarat]
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const savePerkara = async (req, res) => {
   
  const name = req.body.name;
  const title1 = req.body.title1;
  const title2 = req.body.title2;

  try {
    await Perkara.create({
      name:name,
      title1:title1,
      title2:title2
    })
    res.status(201).json({msg:'Perkara Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updatePerkara = async (req, res) => {
  const perkara = await Perkara.findOne({
    where: {
      id_perkara: req.params.id,
    },
  });
  const name = req.body.name
  const title1 = req.body.title1;
  const title2 = req.body.title2;
  try {
    await Perkara.update({
      name:name,
      title1:title1,
      title2:title2
    },{
      where:{
        id_perkara:req.params.id
      }
    })
    res.status(201).json({msg:'Perkara Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deletePerkara = async (req, res) => {
  try {
    await Perkara.destroy({
      where:{
        id_perkara:req.params.id
      }
    })
    res.status(201).json({msg:'Perkara Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
