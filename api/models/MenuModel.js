import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Menu = db.define('menu',{
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING
},{
  freezeTableName:true
});

export default Menu;

