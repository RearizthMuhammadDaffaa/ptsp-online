import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";

const {DataTypes} = Sequelize;

const Catatan = db.define('catatan',{
  id_catatan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_perkara: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nama_catatan: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},{
  freezeTableName:true
});




export default Catatan;

