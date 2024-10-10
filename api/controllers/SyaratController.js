import Syarat from "../models/SyaratModel.js";


export const getSyarats = async (req, res) => {
  try {
    const response = await Syarat.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSyaratById = async (req, res) => {
  try {
    const response = await Syarat.findOne({
      where: {
        id_syarat: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveSyarat = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const deskripsi_syarat = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await Syarat.create(req.body)
    res.status(201).json({msg:'Syarat Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateSyarat = async (req, res) => {
  // const syarat = await Syarat.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const deskripsi_syarat = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await Syarat.update(req.body,{
      where:{
        id_syarat:req.params.id
      }
    })
    res.status(201).json({msg:'Syarat Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteSyarat = async (req, res) => {
  try {
    await Syarat.destroy({
      where:{
        id_syarat:req.params.id
      }
    })
    res.status(201).json({msg:'Syarat Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
