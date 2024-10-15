import VideoEmbed from "../models/VideoEmbedModel.js";


export const getVideoEmbeds = async (req, res) => {
  try {
    const response = await VideoEmbed.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getVideoEmbedById = async (req, res) => {
  try {
    const response = await VideoEmbed.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};



export const saveVideoEmbed = async (req, res) => {
   
  // const perkara = req.body.perkara;
  // const VideoEmbed = req.body.desk;
  // const opsional = req.body.opsi;

  try {
    await VideoEmbed.create(req.body)
    res.status(201).json({msg:'video Berhasil Ditambahkan'})
  } catch (error) {
    console.log(error.message);
  }

 
};

export const updateVideoEmbed = async (req, res) => {
  // const VideoEmbed = await VideoEmbed.findOne({
  //   where: {
  //     id: req.params.id,
  //   },
  // });
  // const perkara = req.body.perkara
  // const VideoEmbed = req.body.desk;
  // const opsional = req.body.opsi;
  try {
    await VideoEmbed.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'VideoEmbed Berhasil Diupdate'})
  } catch (error) {
    console.log(error.message);
    
  }
};

export const deleteVideoEmbed = async (req, res) => {
  try {
    await VideoEmbed.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(201).json({msg:'VideoEmbed Berhasil Dihapus'})
  } catch (error) {
    console.log(error.message);
    
  }
};
