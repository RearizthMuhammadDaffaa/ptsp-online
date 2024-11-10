import Kecamatan from "../models/Kecamatan.js";


export const getKecamatans = async (req, res) => {
  try {
    const response = await Kecamatan.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKecamatanById = async (req, res) => {
  try {
    const response = await Kecamatan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveKecamatan = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const deskripsi_Kecamatan = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await Kecamatan.create(req.body)
    res.status(201).json({msg:'Kecamatan Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateKecamatan = async (req, res) => {
  // const Kecamatan = await Kecamatan.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const deskripsi_Kecamatan = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await Kecamatan.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'Kecamatan Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteKecamatan = async (req, res) => {
  try {
    await Kecamatan.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'Kecamatan Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
