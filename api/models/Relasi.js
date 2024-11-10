import Perkara from "./PerkaraModel.js";
import Syarat from "./SyaratModel.js";
import SyaratTambahan from "./SyaratTambahanModel.js";
import Catatan from "./CatatanModel.js";
import db from "../config/Database.js";
import Kecamatan from "./Kecamatan.js";
import Harga from "./Harga.js"

Perkara.hasMany(Syarat, { foreignKey: "id_perkara" });
Syarat.belongsTo(Perkara, { foreignKey: "id_perkara" });

Perkara.hasMany(SyaratTambahan, { foreignKey: "id_perkara" });
SyaratTambahan.belongsTo(Perkara, { foreignKey: "id_perkara" });

Perkara.hasMany(Catatan, { foreignKey: "id_perkara" });
Catatan.belongsTo(Perkara, { foreignKey: "id_perkara" });

Harga.hasMany(Kecamatan, { foreignKey: 'radius', sourceKey: 'radius' });
Kecamatan.belongsTo(Harga, { foreignKey: 'radius', targetKey: 'radius' });

// (async () => {
//   try {
//     await db.sync({ force: true });
//     console.log("Database & tables created!");
//   } catch (error) {
//     console.error("Error during database sync:", error);
//   }
// })();
