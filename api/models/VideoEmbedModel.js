import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const VideoEmbed = db.define('video_embed',{
  link_id: DataTypes.STRING,
  url: DataTypes.STRING
},{
  freezeTableName:true
});

export default VideoEmbed;

// (async()=>{
//   await db.sync();
// })()