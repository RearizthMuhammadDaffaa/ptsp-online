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


// Catatan.belongsTo(Syarat, { foreignKey: 'id_syarat' });


// (async () => {
//   try {
//     await Catatan.drop();  // Menghapus tabel `syarat`
//     console.log('Tabel Syarat berhasil dihapus');
//   } catch (error) {
//     console.error('Gagal menghapus tabel Syarat:', error.message);
//   }
// })();


// Syarat.associate = function(models) {
//   Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });
//   Syarat.hasMany(models.Dokumen, { foreignKey: 'id_syarat' });
// };

export default Catatan;

// (async()=>{
//   await db.sync();
// })()
