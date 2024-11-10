import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";
import SyaratTambahan from "./SyaratTambahanModel.js";
import Catatan from "./CatatanModel.js";
import Kecamatan from "./Kecamatan.js";

const {DataTypes} = Sequelize;

const Harga = db.define('harga',{
  radius: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, 
  },
  pendaftaran: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  proses: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  panggilanPenggugat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  panggilanTergugat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  redaksi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  materai: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},{
  freezeTableName:true
},
);



Harga.hasMany(Kecamatan, { foreignKey: 'radius', sourceKey: 'radius' });


(async () => {
  try {
    await db.sync({ force: true });
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Error during database sync:", error);
  }
})();





export default Harga;


