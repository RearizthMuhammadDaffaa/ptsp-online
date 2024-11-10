import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";
import SyaratTambahan from "./SyaratTambahanModel.js";
import Catatan from "./CatatanModel.js";

const {DataTypes} = Sequelize;

const Perkara = db.define('perkara',{
  id_perkara: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  title1: {
    type: DataTypes.STRING, // Menambahkan kolom title1
    allowNull: true, // Anda bisa mengatur ini sesuai kebutuhan
  },
  title2: {
    type: DataTypes.STRING, // Menambahkan kolom title2
    allowNull: true, // Anda bisa mengatur ini sesuai kebutuhan
  }

},{
  freezeTableName:true
},
);



Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
Perkara.hasMany(SyaratTambahan, { foreignKey: 'id_perkara' });
Perkara.hasMany(Catatan, { foreignKey: 'id_perkara' });



export default Perkara;
