import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Perkara from "./PerkaraModel.js";

const {DataTypes} = Sequelize;

const SyaratTambahan = db.define('syarat_tambahan',{
  id_syarat_tambahan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_perkara: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deskripsi_syarat_tambahan: {
    type: DataTypes.TEXT,
    allowNull: false
  } 
},{
  freezeTableName:true
});



export default SyaratTambahan;

