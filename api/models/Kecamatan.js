import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";

const {DataTypes} = Sequelize;

const Kecamatan = db.define('kecamatan',{
  radius: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kecamatan: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  freezeTableName:true
});



export default Kecamatan;


