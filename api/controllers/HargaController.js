import Harga from "../models/Harga.js";


export const getHargas = async (req, res) => {
  try {
    const response = await Harga.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getHargaById = async (req, res) => {
  try {
    const response = await Harga.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveHarga = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const deskripsi_Harga = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await Harga.create(req.body)
    res.status(201).json({msg:'Harga Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateHarga = async (req, res) => {
  // const Harga = await Harga.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const deskripsi_Harga = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await Harga.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'Harga Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteHarga = async (req, res) => {
  try {
    await Harga.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'Harga Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
