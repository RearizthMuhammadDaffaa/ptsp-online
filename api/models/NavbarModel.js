import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Navbar = db.define('navbar',{
  name: DataTypes.STRING,
  title:DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING
},{
  freezeTableName:true
});

export default Navbar;

