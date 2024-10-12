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

// Perkara.hasMany(SyaratTambahan, { foreignKey: 'id_perkara' });
// SyaratTambahan.belongsTo(Perkara, { foreignKey: 'id_perkara' });



// Syarat.associate = function(models) {
//   Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });
//   Syarat.hasMany(models.Dokumen, { foreignKey: 'id_syarat' });
// };


// (async () => {
//   try {
//     await SyaratTambahan.drop();  // Menghapus tabel `syarat`
//     console.log('Tabel Syarat berhasil dihapus');
//   } catch (error) {
//     console.error('Gagal menghapus tabel Syarat:', error.message);
//   }
// })();

export default SyaratTambahan;

// (async()=>{
//   await db.sync();
// })()
