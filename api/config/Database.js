import { Sequelize } from "sequelize";
import mysql2 from "mysql2"
import dotenv from 'dotenv';
dotenv.config();
// const db = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,{
//   host:process.env.DB_HOST,
//   dialect:'mysql',
//   dialectModule:mysql2
// });
const db = new Sequelize(
  "sql12738419",
  "sql12738419",
 "rLf2f668yd",
  {
  host:"sql12.freesqldatabase.com",
  dialect:'mysql',
  dialectModule:mysql2
});
// const db = new Sequelize(
//   "rianapri_ptsp_pa_sumedang",
//   "rianapri_daffaa_77",
//  "daffaa123456daffaa;;",
//   {
//   host:"api-ptsp.rianaprilyawan.web.id",
//   dialect:'mysql',
//   dialectModule:mysql2
// });
// const db = new Sequelize(
//   "pstp-pa-sumedang",
//   "root",
//  "",
//   {
//   host:"localhost",
//   dialect:'mysql',
//   dialectModule:mysql2
// });

export default db;
