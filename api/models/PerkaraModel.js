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

// Perkara.associate = function(models) {
//   Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
//   Perkara.hasMany(models.SyaratTambahan, { foreignKey: 'id_perkara' });
// };

// (async () => {
//   try {
//     await db.sync({ alter: true }); // 'alter: true' akan memodifikasi tabel yang sudah ada
//     console.log("Database has been synced!");
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// })();




// (async () => {
//   try {
//     await Perkara.drop();  // Menghapus tabel `syarat`
//     console.log('Tabel Syarat berhasil dihapus');
//   } catch (error) {
//     console.error('Gagal menghapus tabel Syarat:', error.message);
//   }
// })();

export default Perkara;

// Menyinkronkan model ke database
// (async () => {
//   try {
//     await db.sync({ alter: true }); // 'alter: true' akan memodifikasi tabel yang sudah ada
//     console.log("Database has been synced!");
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// })();
