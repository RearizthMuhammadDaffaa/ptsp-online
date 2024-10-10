import Perkara from './models/PerkaraModel.js';
import Syarat from './models/SyaratModel.js';
import db from './config/Database.js';

Perkara.hasMany(Syarat, { foreignKey: 'id_perkara' });
Syarat.belongsTo(Perkara, { foreignKey: 'id_perkara' });

(async () => {
  try {
    await db.sync();
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();