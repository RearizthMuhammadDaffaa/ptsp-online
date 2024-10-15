import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Perkara from "./PerkaraModel.js";
import Catatan from "./CatatanModel.js";

const {DataTypes} = Sequelize;

const Syarat = db.define('syarat',{
  id_syarat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_perkara: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  deskripsi_syarat: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  opsional: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
  
},{
  freezeTableName:true
});


// Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });
// Syarat.hasMany(Catatan, { foreignKey: "id_syarat" });

// (async () => {
//   try {
//     await Syarat.drop();  // Menghapus tabel `syarat`
//     console.log('Tabel Syarat berhasil dihapus');
//   } catch (error) {
//     console.error('Gagal menghapus tabel Syarat:', error.message);
//   }
// })();


// Syarat.associate = function(models) {
//   Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });
//   Syarat.hasMany(models.Dokumen, { foreignKey: 'id_syarat' });
// };

export default Syarat;

// (async()=>{
//   await db.sync();
// })()
