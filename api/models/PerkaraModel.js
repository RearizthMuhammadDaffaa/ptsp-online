import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";
import SyaratTambahan from "./SyaratTambahanModel.js";

const {DataTypes} = Sequelize;

const Perkara = db.define('perkara',{
  id_perkara: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING
},{
  freezeTableName:true
}
);



Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
Perkara.hasMany(SyaratTambahan, { foreignKey: 'id_perkara' });

// Perkara.associate = function(models) {
//   Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
//   Perkara.hasMany(models.SyaratTambahan, { foreignKey: 'id_perkara' });
// };


// (async () => {
//   try {
//     await Perkara.drop();  // Menghapus tabel `syarat`
//     console.log('Tabel Syarat berhasil dihapus');
//   } catch (error) {
//     console.error('Gagal menghapus tabel Syarat:', error.message);
//   }
// })();

export default Perkara;

(async()=>{
  await db.sync();
})()
