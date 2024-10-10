import Perkara from "../models/PerkaraModel.js";
import Syarat from "../models/SyaratModel.js";



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
      include: [Syarat]
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
        id: req.params.id,
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

  try {
    await Perkara.create({
      name:name
    })
    res.status(201).json({msg:'Perkara Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updatePerkara = async (req, res) => {
  const perkara = await Perkara.findOne({
    where: {
      id: req.params.id,
    },
  });
  const name = req.body.name
  try {
    await Perkara.update({
      name:name
    },{
      where:{
        id:req.params.id
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
        id:req.params.id
      }
    })
    res.status(201).json({msg:'Perkara Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
