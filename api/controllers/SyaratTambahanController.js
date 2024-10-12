import SyaratTambahan from "../models/SyaratTambahanModel.js";


export const getSyaratTambahans = async (req, res) => {
  try {
    const response = await SyaratTambahan.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSyaratTambahanById = async (req, res) => {
  try {
    const response = await SyaratTambahan.findOne({
      where: {
        id_syarat_tambahan: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveSyaratTambahan = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const deskripsi_SyaratTambahan = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await SyaratTambahan.create(req.body)
    res.status(201).json({msg:'SyaratTambahan Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateSyaratTambahan = async (req, res) => {
  // const SyaratTambahan = await SyaratTambahan.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const deskripsi_SyaratTambahan = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await SyaratTambahan.update(req.body,{
      where:{
        id_syarat_tambahan:req.params.id
      }
    })
    res.status(201).json({msg:'Syarat Tambahan Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteSyaratTambahan = async (req, res) => {
  try {
    await SyaratTambahan.destroy({
      where:{
        id_syarat_tambahan:req.params.id
      }
    })
    res.status(201).json({msg:'SyaratTambahan Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
