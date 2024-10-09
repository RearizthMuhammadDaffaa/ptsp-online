import { Sequelize } from "sequelize";

const db = new Sequelize('pstp-pa-sumedang','root','',{
  host:'Localhost',
  dialect:'mysql'
});

export default db;