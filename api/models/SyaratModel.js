import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Perkara from "./PerkaraModel.js";

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



// Syarat.associate = function(models) {
//   Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });
//   Syarat.hasMany(models.Dokumen, { foreignKey: 'id_syarat' });
// };

export default Syarat;

(async()=>{
  await db.sync();
})()
