import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Syarat from "./SyaratModel.js";

const {DataTypes} = Sequelize;

const Perkara = db.define('perkara',{
  name: DataTypes.STRING
},{
  freezeTableName:true
}
);

Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });

// Perkara.associate = function(models) {
//   Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
//   Perkara.hasMany(models.SyaratTambahan, { foreignKey: 'id_perkara' });
// };




export default Perkara;

(async()=>{
  await db.sync();
})()
