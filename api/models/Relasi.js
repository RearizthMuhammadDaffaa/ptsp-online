import Perkara from "./PerkaraModel.js";
import Syarat from "./SyaratModel.js";
import SyaratTambahan from "./SyaratTambahanModel.js";
import Catatan from "./CatatanModel.js";
import db from "../config/Database.js";

Perkara.hasMany(Syarat, { foreignKey: "id_perkara" });
Syarat.belongsTo(Perkara, { foreignKey: "id_perkara" });

Perkara.hasMany(SyaratTambahan, { foreignKey: "id_perkara" });
SyaratTambahan.belongsTo(Perkara, { foreignKey: "id_perkara" });

Perkara.hasMany(Catatan, { foreignKey: "id_perkara" });
Catatan.belongsTo(Perkara, { foreignKey: "id_perkara" });


// (async () => {
//   try {
//     await db.sync();
//     console.log('Database synced successfully');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

// (async () => {
//   try {
//     await db.sync({ force: false }); // gunakan 'force: true' jika ingin drop table setiap kali sync (hati-hati)
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// })();
